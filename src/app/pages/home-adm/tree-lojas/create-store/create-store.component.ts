import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../../../Services/store.service';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [MatLabel,MatInput,MatFormField,CommonModule,FormsModule,NgxMaskDirective],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.scss'
})
export class CreateStoreComponent {

  Adress!:string
  AdressNumber!:number
  CEP!:string
  phoneNumber1!:string
  phoneNumber2!:string

  id!:string | null

  private  _router = inject(Router);
  private storeService = inject(StoreService);
  private route = inject(ActivatedRoute);

  ngOnInit() {

  this.id = this.route.snapshot.paramMap.get('idStore');

   if(this.id !== null){
    
     this.Storeid(Number(this.id));
   } 
   
  }

  Storeid(id:number){
    this.storeService.GetStoreId(id).subscribe(
      lojas => {
        this.Adress = lojas.adress,
        this.AdressNumber = lojas.adressNumber
        this.CEP = lojas.cep,
        this.phoneNumber1 = lojas.phoneNumbers[0]
        this.phoneNumber2 = lojas.phoneNumbers[1]
      }
    )
      
    
  }

  alteration(){
    this.storeService.AlterationStore(this.Adress, this.AdressNumber, this.CEP, this.phoneNumber1,this.phoneNumber2)
  }

  voltar(){
    this._router.navigate(["adm"])
  }

  Create(){
    this.storeService.CreateStore(this.Adress, this.AdressNumber, this.CEP, this.phoneNumber1,this.phoneNumber2).pipe(
      catchError(error => {
        console.error('Erro ao buscar motos:', error);
        return of([]); 
      })
    )
  }
}
