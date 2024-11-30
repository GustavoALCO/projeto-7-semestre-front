import { Component, inject } from '@angular/core';
import { CarouselMotosComponent } from "../../components/carousel-motos/carousel-motos.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MotosService } from '../../Services/motos.service';
import { AuthService } from '../../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Brands {
  brands: string;
}
export interface Fuel {
  fuel: string;
}

@Component({
  selector: 'app-create-motos',
  standalone: true,
  imports: [CarouselMotosComponent,
            CommonModule,
            FormsModule,
            MatFormFieldModule,
            MatAutocompleteModule,
            MatInputModule,
            ReactiveFormsModule,
            AsyncPipe
    ],
  templateUrl: './create-motos.component.html',
  styleUrl: './create-motos.component.scss'
})
export class CreateMotosComponent {
  Base64Images: string[] = [];
  Brands!: string;
  Fuel!:string
  Km!:number
  Modelo!:string
  Color!:string
  Year!:number
  Plate!:string 
  Price!:number
  Store!:number

  private motoService = inject(MotosService);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private  _router = inject(Router);
  id!:string | null
  onFilesChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.compressImages(files); // Chama a função para processar as imagens
    }
  }

  compressImages(files: FileList) {
    this.Base64Images = []; // Limpa o array de imagens comprimidas antes de adicionar novas
    Array.from(files).forEach(file => {
      this.compressImage(file);
    });
  }

  compressImage(file: File) {
    const fixedWidth = 800;
    const fixedHeight = 600;
  
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // A URL da imagem em Base64
      const imageUrl = e.target.result;
  
      // Criar um objeto de imagem para carregar a imagem
      const img = new Image();
      img.onload = () => {
        // Criar um canvas para redimensionar a imagem
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        if (ctx) {
          // Ajusta o canvas para o tamanho desejado
          canvas.width = fixedWidth;
          canvas.height = fixedHeight;
  
          // Redimensiona a imagem e desenha no canvas
          ctx.drawImage(img, 0, 0, fixedWidth, fixedHeight);
  
          // Converte a imagem redimensionada para Base64
          const resizedBase64 = canvas.toDataURL(file.type); // usa o tipo original da imagem
  
          // Adiciona a imagem redimensionada ao array Base64
          this.Base64Images.push(resizedBase64);
        } else {
          console.error('Erro ao criar contexto do canvas');
        }
      };
  
      img.src = imageUrl; // Defina a imagem como a URL
    };
  
    reader.readAsDataURL(file); // Converte o arquivo para base64
  }

   // FormControls para os inputs de Fabricantes e Combustível
   myControlBrands = new FormControl('');
   myControlFuel = new FormControl('');
   
   // Dados para as opções de fabricantes e combustíveis
   brands: Brands[] = [{brands: 'Honda'}, {brands: 'Yamaha'}, {brands: 'Dafra'}, {brands: 'Suzuki'}];
   fuel: Fuel[] = [{fuel: 'Flex'}, {fuel: 'Gasolina'}];
 
   // Observables para as opções filtradas
   filteredOptionsBrands!: Observable<Brands[]>;
   filteredOptionsFuel!: Observable<Fuel[]>;
 
   ngOnInit() {
     // Configuração do filtro para fabricantes
     this.filteredOptionsBrands = this.myControlBrands.valueChanges.pipe(
       startWith(''),
       map(value => this._filterBrands(value ?? ''))
     );
 
     // Configuração do filtro para combustíveis
     this.filteredOptionsFuel = this.myControlFuel.valueChanges.pipe(
       startWith(''),
       map(value => this._filterFuel(value ?? ''))
     );

      this.id = this.route.snapshot.paramMap.get('idMoto');

    if(this.id !== null){
      this.Motosid(this.id);
    } 
    console.log(this.id)
   }
 
   // Função de filtro para fabricantes
   private _filterBrands(value: string): Brands[] {
     const filterValue = value.toLowerCase();
     return this.brands.filter(option => option.brands.toLowerCase().includes(filterValue));
   }
 
   // Função de filtro para combustíveis
   private _filterFuel(value: string): Fuel[] {
     const filterValue = value.toLowerCase();
     return this.fuel.filter(option => option.fuel.toLowerCase().includes(filterValue));
   }

   plateEvent(event:Event): void{
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/-/g, '')
    //remove o hifem se só colocado 
    if(value.length >= 3 && value.length <= 7)
      value = value.slice(0, 3) + '-' + value.slice(3);

    this.Plate = value;
   }

   
   Create(){

    const id = this.authService.getIdPayload();
    
    this.motoService.PostMotos(this.Brands, 
                              this.Modelo, 
                              this.Year, 
                              this.Color, 
                              this.Plate.toUpperCase(), 
                              this.Base64Images, 
                              this.Fuel, 
                              this.Price,
                              this.Km, 
                              this.Store, 
                              id)
    .subscribe({
      next: (response)=> {
        alert(`Criado com Sucesso ${response}`)
      },
      error: (error) => {
        console.error(`Não foi Possivel Criar ${error}`)
      }
    }
    )
   }

   Motosid(id:string){
    this.motoService.GetMotosId(id).subscribe(
      motos => {
        this.Brands = motos.motoBrand,
        this.Modelo = motos.model,
        this.Year = motos.age,
        this.Color = motos.color,
        this.Plate = motos.plate
        this.Base64Images = motos.url,
        this.Fuel = motos.fuel,
        this.Price = motos.price,
        this.Km = motos.km,
        this.Store = motos.idStore
      },
    );
  }
   
  alteration(){
    const idUser = this.authService.getIdPayload();

    this.motoService.PutMotos(this.id, this.Brands, this.Modelo, this.Year, this.Color, this.Plate, this.Base64Images, this.Fuel, this.Price,this.Km, this.Store, idUser)
    .subscribe({
      next: () => {
        alert('Moto alterada com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao alterar moto:', error);
        alert('Ocorreu um erro ao alterar a moto.');
      },
    });
  }

  voltar(){
    this._router.navigate(["adm"])
  }
}
