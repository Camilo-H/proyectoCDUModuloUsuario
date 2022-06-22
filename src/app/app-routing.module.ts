import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ReservarEspaciosComponent} from './reservar-espacios2/reservar-espacios.component';
import {GestionarEscenariosComponent} from './gestionar-escenarios/gestionar-escenarios.component';
import {FormCrearGestionEscenarioComponent} from './form-crear-gestion-escenario/form-crear-gestion-escenario.component';
import {FormEditarGestionEscenarioComponent} from './form-editar-gestion-escenario/form-editar-gestion-escenario.component';
import {CalendarioComponent} from './calendario/calendario.component';
import {HomeMasNoticiasComponent} from './home-mas-noticias/home-mas-noticias.component';
import {EstadisticasComponent} from './estadisticas/estadisticas.component';
import {EspaciosCduComponent} from './reservar-espacios2/reservar_espacios_cdu/espacios-cdu/espacios-cdu.component'
const routes: Routes = [

  {
    path: "reservar",
    component: ReservarEspaciosComponent
  },
  {
    path: "escenarios_cdu",
    component: EspaciosCduComponent
  },
  {
    path: "estadisticas",
    component: EstadisticasComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "gestionar",
    component: GestionarEscenariosComponent
  },
  {
    path: "formCrearGestEsce",
    component: FormCrearGestionEscenarioComponent
  },
  {
    path: "formEditararGestEsce",
    component: FormEditarGestionEscenarioComponent
  },
  {
    path: "calendario",
    component: CalendarioComponent
  },
  {
    path: "masNoticias",
    component: HomeMasNoticiasComponent
  },
  {
    path: "**",
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
