import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservarEspaciosComponent } from './reservar-espacios2/reservar-espacios.component';
import { HomeComponent } from './home/home.component';
import { GestionarEscenariosComponent } from './gestionar-escenarios/gestionar-escenarios.component';
import { FormCrearGestionEscenarioComponent } from './form-crear-gestion-escenario/form-crear-gestion-escenario.component';
import { FormEditarGestionEscenarioComponent } from './form-editar-gestion-escenario/form-editar-gestion-escenario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeMasNoticiasComponent } from './home-mas-noticias/home-mas-noticias.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import {EspaciosCduComponent} from './reservar-espacios2/reservar_espacios_cdu/espacios-cdu/espacios-cdu.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservarEspaciosComponent,
    HomeComponent,
    GestionarEscenariosComponent,
    FormCrearGestionEscenarioComponent,
    FormEditarGestionEscenarioComponent,
    CalendarioComponent,
    HomeMasNoticiasComponent,
    EstadisticasComponent,
    EspaciosCduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
