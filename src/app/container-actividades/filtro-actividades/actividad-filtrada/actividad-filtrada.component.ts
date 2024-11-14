import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityCard } from '../../../shared/interfaces/activity-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actividad-filtrada',
  standalone: true,
  imports: [NgClass, FormsModule, DatePipe ,NgStyle],
  templateUrl: './actividad-filtrada.component.html',
  styleUrl: './actividad-filtrada.component.css'
})
export class ActividadFiltradaComponent {
  
  @Input() public actividadFiltrada: ActivityCard;
  @Output() public realizadaClick = new EventEmitter<ActivityCard>();
  @Output() public borrarClick = new EventEmitter<ActivityCard>();
  @Output() public extraInfoClick = new EventEmitter<ActivityCard>();
  

  inputInfoVisible:boolean=false;

   public mostrarInputInfo(){
    this.inputInfoVisible=!this.inputInfoVisible;
   }
  

  constructor(){
    this.actividadFiltrada={} as ActivityCard;
  }

  addToRealizadas() {
    this.realizadaClick.emit(this.actividadFiltrada);
  }
  addToBorradas() {
    this.borrarClick.emit(this.actividadFiltrada);
  }

  public addExtraInfo(info:string){
    this.actividadFiltrada.extraInfo+=info+"\n";
   }



  getCardColor(): string {
    let fechaActual = new Date();
    let fechaActividad=new Date(this.actividadFiltrada.fecha);
    let diferenciaDias=Math.ceil((fechaActividad.getTime()-fechaActual.getTime()));

    if (diferenciaDias<3&&diferenciaDias>0) {
      return 'card-pendiente'; // Color para actividades pendientes que quedan menos de 3 dias
    } else if (diferenciaDias>=3) {
      return 'card-por-realizar'; // Color para actividades pendientes que quedan mas de 3 días
    } else {
      return 'card-caducada'; // Color para actividades pendientes caducadas
    }
  }

  getEstadoStyle():string{
    switch(this.actividadFiltrada.estado){
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
  

