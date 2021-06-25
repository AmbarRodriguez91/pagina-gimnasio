import { Component, OnInit } from '@angular/core';
import { EquipoService} from '../Core/Servicios/equipo.service';

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.component.html',
  styleUrls: ['./entrenadores.component.css'],
})
export class EntrenadoresComponent implements OnInit {

  equipo:any[] = [];
  constructor(private _servicio:EquipoService) {
    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
