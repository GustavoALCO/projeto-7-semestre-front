import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../../../models/User.';
import { UserService } from '../../../../Services/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    FormsModule,
    MatLabel,
  MatFormField,
MatInput],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {

  nome!:string
  displayedColumns: string[] = [
    'idUser',
    'idStore',
    'name',
    'lastName',
    'role',
    'login'
  ];
  dataSource = new MatTableDataSource<User>();
  lista: Observable<boolean>;
  ListaUsers!: User[];

  constructor(private UserService: UserService, ){
    this.lista = of(false)
  }

  ngOnInit(){
    this.lista = of(false)
    this.obterUsers()
  }

  obterUsers() {
    this.UserService.GetUsers('').subscribe( produto => 
      {this.ListaUsers = produto;
        this.dataSource.data = this.ListaUsers; 
      });
  }

  buscarUser(){
    console.log(this.nome)
    if(this.nome === '' || this.nome === undefined){
      this.obterUsers();
    }
    else{
      this.UserService.GetUsers(this.nome)
      .subscribe(produto =>
         {this.ListaUsers = produto
          this.dataSource.data = this.ListaUsers;
         });
    }
  }
}
