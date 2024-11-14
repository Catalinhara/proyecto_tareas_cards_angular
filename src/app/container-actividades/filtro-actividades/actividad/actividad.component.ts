import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityCard } from '../../../shared/interfaces/activity-card';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [NgClass, DatePipe, NgStyle],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent {
  @Input() public actividad: ActivityCard;
  @Output() public realizadaClick = new EventEmitter<ActivityCard>();
  @Output() public borrarClick = new EventEmitter<ActivityCard>();
  @Output() public extraInfoClick = new EventEmitter<ActivityCard>();


   inputInfoVisible:boolean=false;

   public mostrarInputInfo(){
    this.inputInfoVisible=!this.inputInfoVisible;
   }

   public addExtraInfo(info:string){
    this.actividad.extraInfo+=info+"\n";
   }
  
  
  addToRealizadas() {
    this.realizadaClick.emit(this.actividad);
  }
  addToBorradas() {
    this.borrarClick.emit(this.actividad);
  }


  constructor(){
    this.actividad={} as ActivityCard;
  }

  getCardColor(): string {
    let fechaActual = new Date();
    let fechaActividad=new Date(this.actividad.fecha);
    let diferenciaDias=Math.ceil((fechaActividad.getTime()-fechaActual.getTime())/(1000 * 60 * 60 * 24));

    if (diferenciaDias<3&&diferenciaDias>0) {
      return 'card-pendiente'; // Color para actividades pendientes que quedan menos de 3 dias
    } else if (diferenciaDias>=3) {
      return 'card-por-realizar'; // Color para actividades pendientes que quedan mas de 3 días
    } else {
      return 'card-caducada'; // Color para actividades pendientes caducadas
    }
  }

  getEstadoStyle():string{
    switch(this.actividad.estado){
    case "Realizada":
      return 'idCardRealizada';
    case "Importante":
      return 'idCardImportante';
    case "Pendiente":
      return 'idCardPendiente';
    case "Disponible":
      return 'idCardDisponible';
    case "Borrada":
      return 'idCardBorrada';
    default:
      return 'idCardDisponible';

    }
    
  }
}
