import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FiltroActividadesComponent } from '../container-actividades/filtro-actividades/filtro-actividades.component';
import { ActividadComponent } from '../container-actividades/filtro-actividades/actividad/actividad.component';
import { ContainerActividadesComponent } from '../container-actividades/container-actividades.component';
import { ActivityCard } from '../shared/interfaces/activity-card';
import { FormsModule, NgModel } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { ActividadFiltradaComponent } from '../container-actividades/filtro-actividades/actividad-filtrada/actividad-filtrada.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FiltroActividadesComponent, ActividadComponent, ContainerActividadesComponent, FormsModule, NgStyle, ActividadFiltradaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  @Output() public addActivityEvent = new EventEmitter<ActivityCard>();
  @Output() public removeActivityEvent = new EventEmitter<string>();
  @Output() public editActivityEvent = new EventEmitter<ActivityCard>();
  @Output() public filtrarEventFecha = new EventEmitter<string>();
  @Output() public filtrarEventEstado = new EventEmitter<string>();
  

  inputFieldVisibleAnadir: boolean = false;
  inputFieldVisibleBorrar: boolean = false;
  inputFieldVisibleEditar: boolean=false;


  public mostrarInput(){
    this.inputFieldVisibleAnadir = !this.inputFieldVisibleAnadir;
  }
  public mostrarRemove(){
    this.inputFieldVisibleBorrar = !this.inputFieldVisibleBorrar;
  }
  public mostrarEditar(){
    this.inputFieldVisibleEditar = !this.inputFieldVisibleEditar;
  }

 
  public addActivity(titulo: string, descripcion: string, fecha: string, estado: string) {
    let extraInfo="";
    let nuevaActivity: ActivityCard = { titulo, descripcion, fecha, estado, extraInfo };
    this.addActivityEvent.emit(nuevaActivity);
    this.mostrarInput();
  }

  public removeActivity(titulo: string) {
    this.removeActivityEvent.emit(titulo);
  }
  
  public editActivity(titulo:string, descripcion:string, fecha:string, estado:string) {
    let extraInfo="";
    let card : ActivityCard={titulo, descripcion,fecha, estado, extraInfo};
    this.editActivityEvent.emit(card);
  }
  public filtrarActividadesFecha(filtroFecha: string){
    this.filtrarEventFecha.emit(filtroFecha);
  }
  public filtrarActividadesEstado(filtroEstado: string){
    this.filtrarEventEstado.emit(filtroEstado);
  }

  
  
   
}
