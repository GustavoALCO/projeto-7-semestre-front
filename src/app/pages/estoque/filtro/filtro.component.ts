import { Component, EventEmitter, Output } from '@angular/core';
import { CardImageComponent } from './card-image/card-image.component';
import { FormsModule } from '@angular/forms';

interface arraybutton{
  nome:string 
  valid:boolean
}

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CardImageComponent, FormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroComponent {
Brands:arraybutton[] = []

model!:string 
color!:string

Year1!:number | null
Year2!:number | null

Km1!:number | null
Km2!:number | null

Price1!:number | null
Price2!:number | null 

onParametersReceived(filterData: any) {

    this.ButtonsSelecionados(filterData);
  }

@Output() filterData = new EventEmitter<any>();

ButtonsSelecionados(filterData: any) {
  filterData.forEach((filterItem: any) => {
    if (filterItem.valid === true) {
      this.Brands.push(filterItem);
    }
    
    if (filterItem.valid === false) {
      
      const remove = this.Brands.findIndex(item => item.nome === filterItem.nome);
      
      // Se o item foi encontrado, remove-o da lista
      if (remove !== -1) {
        this.Brands.splice(remove, 1);
        
      }
    }
  });
}

 validateInput(event:Event,variavel:string ):void{
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '');

    switch(variavel){
      case 'year1': 
          this.Year1 = Number(input.value);

          
      break;
      case 'year2':
        if (Number(input.value) >= Number(this.Year1)) {
          this.Year2 = Number(input.value);
        } 
        
      break;
      case 'km1': 
                  this.Km1 = Number(input.value);

                  
      break;

      case 'km2': if (Number(input.value) >= Number(this.Km1)) {
                      this.Km2 = Number(input.value);
                    }
                 
      
      break;

      case 'price1': 
        this.Price1 = Number(input.value);
        if(input.value === null || input.value === undefined || input.value === '' || input.value === '0')
        {
          this.Price1 = null
        }
      break;

      case 'price2': if (Number(input.value) >= Number(this.Price1)) {
        this.Price2 = Number(input.value);
      }
      
      break;
      default:
        console.error("variavel não elecionada");
    }
      
 }

//  validateInputString(event:Event,variavel:string ):void{
//     switch(variavel){
//       case("model"):
//         if(variavel !== null || variavel !== undefined || variavel !== '' ){
//           this.model = variavel
//         } 
//       break;
//       case("color"):
//         if(variavel !== null || variavel !== undefined || variavel !== '' ){
//           this.color = variavel
//         } 
//       break;
      
//     }
//  }

 enviarFiltros(){
  if (this.Price1 === undefined || this.Price1 === null) {
    this.Price1 = 1;
  }

  if (this.Km1 === undefined || this.Km1 === null) {
    this.Km1 = 1;
  }

  if (this.Year1 === undefined || this.Year1 === null) {
    this.Year1 = 1;
  }

  const filtro = {
    Brands: this.Brands.map(brand => brand.nome), 
    Model: this.model,
    Color: this.color,
    Year: [this.Year1, this.Year2],
    Km: [this.Km1, this.Km2],
    Price: [this.Price1, this.Price2]
  };
  console.log("Esta enviando esses Filtros" ,filtro)
  this.filterData.emit(filtro);
 }
}
