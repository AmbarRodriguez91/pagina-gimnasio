import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {PreciosComponent} from './precios/precios.component';
import {EntrenadoresComponent} from './entrenadores/entrenadores.component';

const routes: Routes =[
  { path: 'home', component: InicioComponent},
  { path: 'precios', component: PreciosComponent},
  { path: 'entrenadores', component: EntrenadoresComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
