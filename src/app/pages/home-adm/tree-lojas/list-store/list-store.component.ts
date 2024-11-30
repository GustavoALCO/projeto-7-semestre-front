import { Component } from '@angular/core';
import { StoreService } from '../../../../Services/store.service';
import { Observable, of } from 'rxjs';
import { Store } from '../../../../models/Store';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-store',
  standalone: true,
  imports: [CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    FormsModule,
    MatLabel,
  MatFormField,
MatInput],
  templateUrl: './list-store.component.html',
  styleUrl: './list-store.component.scss'
})
export class ListStoreComponent {
  nome!:string
  displayedColumns: string[] = [
    'idStore',        
    'adress',         
    'adressNumber',    
    'cep',            
    'storePhones'     
  ];
  Listaprodutos!: Store[];
  dataSource = new MatTableDataSource<Store>();
  lista: Observable<boolean>;

  ngOnInit(){
    this.lista = of(false)
    this.obterProdutos()
  }
  
  constructor(private produtosServices: StoreService, ){
    this.lista = of(false)
  }
  
  obterProdutos(){
    this.produtosServices.GetStore('')
    .subscribe( produto => 
      {this.Listaprodutos = produto;
        this.dataSource.data = this.Listaprodutos; 
      });
  }
  
  buscarProduto(){
    if(this.nome === ''){
      this.obterProdutos();
    }
    else{
      this.produtosServices.GetStore(this.nome)
      .subscribe(produto =>
         {this.Listaprodutos = produto
          this.dataSource.data = this.Listaprodutos;
         });
    }
  }
}
