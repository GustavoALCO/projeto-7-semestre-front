import { Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { MotosComponent } from './pages/motos/motos.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';
import { CreateMotosComponent } from './pages/create-motos/create-motos.component';
import { authGuard } from './guards/auth.guard';
import { ListMotosComponent } from './pages/home-adm/tree-motos/list-motos/list-motos.component';
import { ListStoreComponent } from './pages/home-adm/tree-lojas/list-store/list-store.component';
import { CreateStoreComponent } from './pages/home-adm/tree-lojas/create-store/create-store.component';
import { CreateFuncionarioComponent } from './pages/home-adm/tree-funcionarios/create-funcionario/create-funcionario.component';
import { ListUsersComponent } from './pages/home-adm/tree-funcionarios/list-users/list-users.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'motos/:idMoto', component:MotosComponent},
    {path: 'estoque', component:EstoqueComponent},
    {path: 'contatos', component: ContatosComponent},
    {path: 'login', component:LoginComponent},
    { 
        path: 'adm', 
        component: HomeAdmComponent,
        canActivate: [authGuard()],
        children: [
          { path: 'moto', component: CreateMotosComponent },
          { path: 'moto/:idMoto', component: CreateMotosComponent },
          { path: 'listMoto', component: ListMotosComponent },
          { path: 'Store', component: CreateStoreComponent },
          { path: 'Store/:idStore', component: CreateStoreComponent },
          { path: 'listStore', component: ListStoreComponent },
          { path: 'user', component: CreateFuncionarioComponent },
          { path: 'user/:idUser', component: CreateFuncionarioComponent },
          { path: 'ListUsers', component: ListUsersComponent },
        ] 
      }
];
