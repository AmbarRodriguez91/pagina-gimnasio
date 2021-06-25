import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { PreciosComponent } from './precios/precios.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';

import {EquipoService} from './Core/Servicios/equipo.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PreciosComponent,
    EntrenadoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
