import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: 'Isaac Hernandez',
      especialidad: 'Entrenador Personal',
      Descripcion: 'Evalúa tu fortaleza física y tus debilidades, elabora planes de entrenamiento personalizados. ' +
        'Presta ayuda física y psíquica y controla tu progreso periódicamente. También se asegura de que no te lesiones ' +
        'mientras entrenan.'
    },
    {
      nombre: 'Soraya Cevallos ',
      especialidad: 'Instructora de Bailoterapia',
      Descripcion: 'Te acompaña ha hacer ejercicios llevados al baile, lo que te permite relajarte, compartir, ' +
        'disfrutar de la música, ejercitarte y liberarte del estrés y la ansiedad; la bailoterapia es un diálogo entre ' +
        'la música y el cuerpo que favorece la estabilidad emocional al elevar la producción de endorfinas, generando una ' +
        'sensación de placer y alegría con un impacto directo en los niveles de autoestima y motivación.'
    },
    {
      nombre: 'José Macias',
      especialidad: 'Instructor de Spinning',
      Descripcion: 'Master Instructor, con conocimientos prácticos y líder dinámico del ciclismo estacionario bajo techo. ' +
        'Por medio de una bicicleta estática te ayudará a trabajar el tren inferior: las piernas y los glúteos.'
    },
  ]

  constructor() {
    console.log('funcionando servicio')
  }

  obtenerEquipo() {
    return this.equipo;
  }
}
