import { Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { MotosComponent } from './pages/motos/motos.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'motos', component:MotosComponent},
    {path: 'estoque', component:EstoqueComponent},
    {path: 'contatos', component: ContatosComponent}
];
