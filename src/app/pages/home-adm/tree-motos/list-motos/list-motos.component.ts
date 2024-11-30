import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { Observable, of } from 'rxjs';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { Moto, MotoCreate } from '../../../../models/Motos';
import { MotosService } from '../../../../Services/motos.service';
import { DialogListInfosComponent } from './dialog-list-infos/dialog-list-infos.component';
@Component({
  selector: 'app-list-motos',
  standalone: true,
  imports: [CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    FormsModule,
    MatLabel,
  MatFormField,
MatInput],
  templateUrl: './list-motos.component.html',
  styleUrl: './list-motos.component.scss'
})
export class ListMotosComponent {
  nome!:string
  displayedColumns: string[] = [
    'idMoto', 'motoBrand', 'model', 'fuel', 'color', 
    'plate', 'age', 'km', 'price'
    , 'idStore'
  ];
  Listaprodutos!: Moto[];
  dataSource = new MatTableDataSource<MotoCreate>();
  produtos!: Moto[]
  lista: Observable<boolean>;

  dialog = inject(MatDialog);

  ngOnInit(){
    this.lista = of(false)
    this.obterProdutos()
  }
  
  constructor(private produtosServices: MotosService, ){
    this.lista = of(false)
  }
  
  obterProdutos(){
    this.produtosServices.GetMotosModel('', 1)
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
      this.produtosServices.GetMotosModel(this.nome, 1)
      .subscribe(produto =>
         {this.Listaprodutos = produto
          this.dataSource.data = this.Listaprodutos;
         });
    }
  }

  clickColuna(row: Moto) {
    
    const dialogRef = this.dialog.open(DialogListInfosComponent, {width: '400px',
      height: "800px",
    data:   
      {
        idMoto: row.idMoto || '',
        motoBrand: row.motoBrand || '',
        model: row.model || '',
        fuel: row.fuel || '',
        color: row.color || '',
        plate: row.plate || '',
        age: row.age || 0,
        km: row.km || 0,
        price: row.price || 0,
        url: row.url || [],
        dateUpload: row.dateUpload || new Date(),
        createUserId: row.createUserId || '',
        dateUpdate: row.dateUpdate || new Date(),
        alterationUserId: row.alterationUserId || '',
        idStore: row.idStore || 0
      },
    });
    
  }
}
