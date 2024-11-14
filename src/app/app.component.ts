import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerActividadesComponent } from './container-actividades/container-actividades.component';
import { MenuComponent } from './menu/menu.component';
import { ActivityCard } from './shared/interfaces/activity-card';
import { FiltroActividadesComponent } from './container-actividades/filtro-actividades/filtro-actividades.component';
import { NgStyle } from '@angular/common';
import { ActividadFiltradaComponent } from './container-actividades/filtro-actividades/actividad-filtrada/actividad-filtrada.component';
import { ActividadComponent } from './container-actividades/filtro-actividades/actividad/actividad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent ,ContainerActividadesComponent, FiltroActividadesComponent ,NgStyle, ActividadFiltradaComponent, ActividadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TareaFinal7';
  mainContainerVisibile: boolean=true;
  filterContainerVisible: boolean=false;

  actividadesFiltradas: ActivityCard[]=[];
  actividadesBorradas: ActivityCard[]=[];
  actividadesRealizadas: ActivityCard[]=[];
  estadoActividad:string="";


  ngOnInit() {
    //obtener los datos del localStorage al inicializar el componente
    let actividadesFromLocalStorage = localStorage.getItem('actividades');
    if (actividadesFromLocalStorage !== null) {
      this.actividades = JSON.parse(actividadesFromLocalStorage);
    }

    let actividadesFiltradasFromLocalStorage = localStorage.getItem('actividadesFiltradas');
    if (actividadesFiltradasFromLocalStorage !== null) {
      this.actividadesFiltradas = JSON.parse(actividadesFiltradasFromLocalStorage);
    }

    let actividadesBorradasFromLocalStorage = localStorage.getItem('actividadesBorradas');
    if (actividadesBorradasFromLocalStorage !== null) {
      this.actividadesBorradas = JSON.parse(actividadesBorradasFromLocalStorage);
    }

    let actividadesRealizadasFromLocalStorage = localStorage.getItem('actividadesRealizadas');
    if (actividadesRealizadasFromLocalStorage !== null) {
      this.actividadesRealizadas = JSON.parse(actividadesRealizadasFromLocalStorage);
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem('actividades', JSON.stringify(this.actividades));
    localStorage.setItem('actividadesFiltradas', JSON.stringify(this.actividadesFiltradas));
    localStorage.setItem('actividadesBorradas', JSON.stringify(this.actividadesBorradas));
    localStorage.setItem('actividadesRealizadas', JSON.stringify(this.actividadesRealizadas));
  }

  actividades:ActivityCard[] = [
    {
      titulo: 'Comprar víveres',
      descripcion: 'Ir al supermercado y comprar lo necesario para la semana',
      fecha: '2024-05-24T00:00',
      estado: 'Disponible',
      extraInfo: ''
    },
    {
      titulo: 'Reunión con el equipo',
      descripcion: 'Revisar el progreso del proyecto y asignar tareas',
      fecha: '2024-06-21T01:00',
      estado: 'Importante',
      extraInfo: ''
    },
    {
      titulo: 'Cita con el médico',
      descripcion: 'Acudir al consultorio para la revisión de rutina',
      fecha: '2024-07-22T02:00',
      estado: 'Pendiente',
      extraInfo: ''
    },
    {
      titulo: 'Llamar a mamá',
      descripcion: 'Recordarle el cumpleaños de papá y preguntar cómo está',
      fecha: '2024-07-23T03:00',
      estado: 'Realizada',
      extraInfo: ''
    },
    {
      titulo: 'Entrenamiento de fútbol',
      descripcion: 'Práctica de fútbol en el campo de la universidad',
      fecha: '2024-08-24T05:00',
      estado: 'Realizada',
      extraInfo: ''
    },{
      titulo: 'Comprar víveres',
      descripcion: 'Ir al supermercado y comprar lo necesario para la semana',
      fecha: '2024-08-21T04:00',
      estado: 'Pendiente',
      extraInfo: ''
    },
    {
      titulo: 'Reunión con el equipo',
      descripcion: 'Revisar el progreso del proyecto y asignar tareas',
      fecha: '2024-09-21T07:00',
      estado: 'Realizada',
      extraInfo: ''
    },
    {
      titulo: 'Cita con el médico',
      descripcion: 'Acudir al consultorio para la revisión de rutina',
      fecha: '2024-09-22T09:00',
      estado: 'Pendiente',
      extraInfo: ''
    },
    {
      titulo: 'Llamar a mamá',
      descripcion: 'Recordarle el cumpleaños de papá y preguntar cómo está',
      fecha: '2024-10-23T12:00',
      estado: 'Importante',
      extraInfo: ''
    },
    {
      titulo: 'Entrenamiento de fútbol',
      descripcion: 'Práctica de fútbol en el campo de la universidad',
      fecha: '2024-10-24T09:00',
      estado: 'Importante',
      extraInfo: ''
    }
  ];

//metodo para añadir actividades
public  cuandoAddActivity(actividad: ActivityCard) {
    this.actividades.push(actividad);
    //ordenar el array
    this.sortActividades(this.actividades);
    this.guardarEnLocalStorage();
}

//metodo para borrar y añadir actividades al array de borradas
public  cuandoRemoveActivity(titulo: string) {
  let cardEncontrada: boolean=false;
    for (let i = 0; i < this.actividades.length; i++) {
      if (this.actividades[i].titulo==titulo) {
        cardEncontrada=true;
        this.actividadesBorradas.push(this.actividades[i]);
        this.actividades.splice(i, 1);
        this.guardarEnLocalStorage();
        break; //parar el bucle una vez que se ha encontrado y eliminado la actividad
      }
    }
    if(cardEncontrada){
      alert("Actividad borrada!");
      this.guardarEnLocalStorage();
    }else{
      alert("Actividad no encontrada.");
      this.guardarEnLocalStorage();
    }
    //ordenar el array
  this.sortActividades(this.actividades);
  this.guardarEnLocalStorage();
}
//metodo editar
public  cuandoEditActivity(actividadEditada: ActivityCard) {
  let cardEncontrada: boolean=false;
  for (let i = 0; i < this.actividades.length; i++) {
    if (this.actividades[i].titulo==actividadEditada.titulo) {
      cardEncontrada=true;
      this.actividades[i] = actividadEditada; // actualizar la actividad con los nuevos valores
      this.guardarEnLocalStorage();
      break; // parar el bucle una vez que se ha encontrado y editado la actividad
    }
  }
    if(cardEncontrada){
      this.guardarEnLocalStorage();
      alert("Actividad actualizada!");
    }else{
      this.guardarEnLocalStorage();
      alert("Actividad no encontrada.");
    }
    //ordenar el array
this.sortActividades(this.actividades);
this.guardarEnLocalStorage();
}


//metodo filtrar por fecha usando como parametro el input del usuario
public  cuandoFiltrarFecha(filtroFecha: string){

  this.mainContainerVisibile=false;
  this.filterContainerVisible=true;

  //vaciar el array
  this.actividadesFiltradas = [];
  //.push elementos filtrados en el array de actividadesFiltradas
  for (let i = 0; i < this.actividades.length; i++) {
    let actividad = this.actividades[i];
    console.log(actividad.fecha);
    console.log(filtroFecha);
    // Si el estado de la actividad coincide con el filtro, se añade a actividadesFiltradas
    if (actividad.fecha==filtroFecha) {
      this.actividadesFiltradas.push(actividad);
      this.guardarEnLocalStorage();
    }
  }
  //ordenar el array de actividades filtradas
  this.sortActividades(this.actividadesFiltradas);
  this.guardarEnLocalStorage();
}


//metodo filtrar por estado usando como parametro la seleccion del usuario
public  cuandoFiltrarEstado(filtroEstado: string){

  this.mainContainerVisibile=false;
  this.filterContainerVisible=true;
  this.estadoActividad="";

  //guardar el estado en la variable segun el parametro para mostrarlo en el titulo
  if(filtroEstado=="Toda"){
    this.estadoActividad="totales";
  }
  else if(this.actividadesFiltradas.length>0){
    this.estadoActividad=filtroEstado.toLowerCase()+"s";
  }
  else if(this.actividadesBorradas.length>0){
    this.estadoActividad=filtroEstado.toLowerCase()+"s";
  }
  else if(this.actividadesRealizadas.length>0){
    this.estadoActividad=filtroEstado.toLowerCase()+"s";
  }
  //vaciar el array
  this.actividadesFiltradas = [];

//si se seleciona Todas, se muestran todas las actividades
if(filtroEstado=="Toda"){
  this.actividadesFiltradas=this.actividades;
  this.sortActividades(this.actividadesFiltradas);
  this.guardarEnLocalStorage();
}else if(filtroEstado=="Borrada"){
  this.actividadesFiltradas=this.actividadesBorradas;
  this.sortActividades(this.actividadesBorradas);
  this.guardarEnLocalStorage();
}else if(filtroEstado=="Hecha"){
  this.actividadesFiltradas=this.actividadesRealizadas;
  this.sortActividades(this.actividadesRealizadas);
  this.guardarEnLocalStorage();
}
else{  
  //.push elementos filtrados en el array de actividadesFiltradas
  for (let i = 0; i < this.actividades.length; i++) {
    let actividad = this.actividades[i];
    // Si el estado de la actividad coincide con el filtro, se añade a actividadesFiltradas
    if (actividad.estado==filtroEstado) {
      this.actividadesFiltradas.push(actividad);
    }
  }
  //ordenar el array de actividades filtradas
  this.sortActividades(this.actividadesFiltradas);
  this.guardarEnLocalStorage();
}
}

//metodo añadir actividades al array de  realizadas cambiando el estado tambien
cuandoCuandoAddToRealizadas(actividad :ActivityCard) {
  let actividadYaBorrada: boolean=false;
  for(let varActividad of this.actividadesBorradas){

    if(varActividad==actividad){
      actividadYaBorrada=true;
    }
  }if(actividadYaBorrada){
    alert("Las actividad borradas no pueden ser realizadas.");
  }else{
  actividad.estado = 'Realizada';
  this.actividadesRealizadas.push(actividad);
  this.sortActividades(this.actividadesRealizadas);
  this.guardarEnLocalStorage();
  }
}

//metodo añadir actividades al array de borradas cambiando el estado tambien
cuandoCuandoAddToBorradas(actividad :ActivityCard) {
  //boolean para no permitir añadir infinitas actividades a las actividadesBorradas
  let actividadYaBorrada: boolean=false;
  for(let varActividad of this.actividadesBorradas){

    if(varActividad==actividad){
      actividadYaBorrada=true;
    }
  }
  if(actividadYaBorrada){
    alert("La actividad ya esta borrada.");
  }else{
    actividad.estado = 'Borrada';
    this.actividadesBorradas.push(actividad);
    this.eliminarActividad(actividad);
    this.sortActividades(this.actividadesBorradas);
    this.guardarEnLocalStorage();
    }
  

}

//metodo añadir informacion extra a los actividades creadas mediante el evento del boton de los activity cards, que manda un objeto con el parametro extrainfo actualizado
cuandoCuandoExtraInfo(actividad :ActivityCard){

  //sentencia para guardar la infoextra por si se introduce desde el filtro
  for(let actividadFiltrada of this.actividadesFiltradas){
    if (actividadFiltrada==actividad){
      actividadFiltrada.extraInfo=actividad.extraInfo;
      this.guardarEnLocalStorage();
    }
  }



  for (let i=0;i<this.actividades.length; i++) {
    //hice esta estructura para verificar y actualizar la misma card del array de actividades
    if (this.actividades[i].titulo==actividad.titulo&&this.actividades[i].fecha==actividad.fecha) {
      this.actividades[i]=actividad;
      this.guardarEnLocalStorage();
      break; // para el bucle una vez que se ha encontrado y actualizado el extrainfor de la actividad
    }
  }

}

//metodo borrar actividades del array principal y del array de realizadas
eliminarActividad(actividad: ActivityCard) {
  for (let i=0;i<this.actividades.length; i++) {
    if (this.actividades[i]==actividad) {
      this.actividades.splice(i, 1);
      this.guardarEnLocalStorage();
      break; // para el bucle una vez que se ha encontrado en actividades y eliminado la actividad
    }
    if (this.actividadesRealizadas[i]==actividad) {
      this.actividadesRealizadas.splice(i, 1);
      this.guardarEnLocalStorage();
      break; // para el bucle una vez que se ha encontrado en actividadesRealizadas y eliminado la actividad
    }

  }
}
//metodo para volver al inicio
public toInicio(){
  this.mainContainerVisibile=true;
  this.filterContainerVisible=false;

}





  // metodo burbuja para ordenar el array por fecha
 public sortActividades(paramActividades: ActivityCard[]) {
    for (let i = 0; i < paramActividades.length - 1; i++) {
      for (let j = 0; j <paramActividades.length - i - 1; j++) {
        const fecha1 = new Date(paramActividades[j].fecha).getTime();
        const fecha2 = new Date(paramActividades[j + 1].fecha).getTime();
        if (fecha1 > fecha2) {
          const temp=paramActividades[j];
          paramActividades[j]=paramActividades[j + 1];
          paramActividades[j + 1]=temp;
        }
      }
    }
  }
}



