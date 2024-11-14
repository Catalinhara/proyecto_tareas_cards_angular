import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActividadComponent } from './filtro-actividades/actividad/actividad.component';
import { FiltroActividadesComponent } from './filtro-actividades/filtro-actividades.component';
import { ActivityCard } from '../shared/interfaces/activity-card';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-container-actividades',
  standalone: true,
  imports: [ActividadComponent, FiltroActividadesComponent, MenuComponent, FormsModule],
  templateUrl: './container-actividades.component.html',
  styleUrl: './container-actividades.component.css'
})
export class ContainerActividadesComponent {
  @Input() public actividades: ActivityCard[] = [];

  @Output() public actividadRealizada = new EventEmitter<ActivityCard>();
  @Output() public actividadBorrada = new EventEmitter<ActivityCard>();
  @Output() public extraInfo = new EventEmitter<ActivityCard>();

  cuandoAddToRealizadas(actividad: ActivityCard) {
    this.actividadRealizada.emit(actividad);
  }
  cuandoAddToBorradas(actividad: ActivityCard) {
    this.actividadBorrada.emit(actividad);
  }
  cuandoExtraInfo(actividad: ActivityCard){
    this.extraInfo.emit(actividad);
  }
}
