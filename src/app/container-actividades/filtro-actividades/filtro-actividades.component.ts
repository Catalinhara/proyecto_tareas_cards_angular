import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityCard } from '../../shared/interfaces/activity-card';
import { ActividadFiltradaComponent } from './actividad-filtrada/actividad-filtrada.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../../menu/menu.component';
import { ContainerActividadesComponent } from '../container-actividades.component';

@Component({
  selector: 'app-filtro-actividades',
  standalone: true,
  imports: [ActividadFiltradaComponent, FormsModule, MenuComponent, ContainerActividadesComponent],
  templateUrl: './filtro-actividades.component.html',
  styleUrl: './filtro-actividades.component.css'
})
export class FiltroActividadesComponent {

  
  @Input() public actividadesFiltradas: ActivityCard[] = [];
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

