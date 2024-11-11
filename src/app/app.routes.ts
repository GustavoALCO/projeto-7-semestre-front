import { Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { MotosComponent } from './pages/motos/motos.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdmComponent } from './pages/home-adm/home-adm.component';
import { CreateMotosComponent } from './pages/create-motos/create-motos.component';
import { AdmUsersComponent } from './pages/adm-users/adm-users.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'motos/:idMoto', component:MotosComponent},
    {path: 'estoque', component:EstoqueComponent},
    {path: 'contatos', component: ContatosComponent},
    {path: 'login', component:LoginComponent},
    {path: 'adm', component:HomeAdmComponent},
    {path: 'adm-moto', component:CreateMotosComponent},
    {path: 'user', component:AdmUsersComponent}
];
