import { Servicios } from './model/servicios';
import { Anuncio } from './model/anuncio';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { ServiciosListarComponent} from './page/servicios/servicios-listar/servicios-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiciosCreaeditaComponent } from './page/servicios/servicios-creaedita/servicios-creaedita.component';
import { MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { ServiciosDialogoComponent } from './page/servicios/servicios-listar/servicios-dialogo/servicios-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiciosBuscarComponent } from './page/servicios/servicios-buscar/servicios-buscar.component';
import { AnuncioComponent } from './page/anuncio/anuncio.component';
import { AnuncioListarComponent } from './page/anuncio/anuncio-listar/anuncio-listar.component';
import { AnuncioDialogoComponent } from './page/anuncio/anuncio-listar/anuncio-dialogo/anuncio-dialogo.component';
import { AnuncioCreaeditaComponent } from './page/anuncio/anuncio-creaedita/anuncio-creaedita.component';
import { AnuncioBuscarComponent } from './page/anuncio/anuncio-buscar/anuncio-buscar.component';
import { AdultoJovenComponent } from './page/adulto-joven/adulto-joven.component';
import { AdultoJovenListarComponent } from './page/adulto-joven/adulto-joven-listar/adulto-joven-listar.component';
import { AdultoJovenInsertarComponent } from './page/adulto-joven/adulto-joven-insertar/adulto-joven-insertar.component';
import { AdultoJovenDialogoComponent } from './page/adulto-joven/adulto-joven-dialogo/adulto-joven-dialogo.component';
import { AdultoJovenBuscarComponent } from './page/adulto-joven/adulto-joven-buscar/adulto-joven-buscar.component';
import { EnfermeroComponent } from './page/enfermero/enfermero.component';
import { EnfermeroListarComponent } from './page/enfermero/enfermero-listar/enfermero-listar.component';
import { EnfermeroDialogoComponent } from './page/enfermero/enfermero-listar/enfermero-dialogo/enfermero-dialogo.component';
import { EnfermeroCreaeditaComponent } from './page/enfermero/enfermero-creaedita/enfermero-creaedita.component';
import { InteresComponent } from './page/interes/interes.component';
import { InteresListarComponent } from './page/interes/interes-listar/interes-listar.component';
import { InteresDialogoComponent } from './page/interes/interes-listar/interes-dialogo/interes-dialogo.component';
import { InteresCreaeditaComponent } from './page/interes/interes-creaedita/interes-creaedita.component';
import { InteresBuscarComponent } from './page/interes/interes-buscar/interes-buscar.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { ComentariosComponent } from './page/comentarios/comentarios.component';
import { DistritoListarComponent } from './page/distrito/distrito-listar/distrito-listar.component';
import { ComentariosListarComponent } from './page/comentarios/comentarios-listar/comentarios-listar.component';
import { DistritoDialogoComponent } from './page/distrito/distrito-listar/distrito-dialogo/distrito-dialogo.component';
import { ComentariosDialogoComponent } from './page/comentarios/comentarios-listar/comentarios-dialogo/comentarios-dialogo.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';
import { ComentariosCreaeditaComponent } from './page/comentarios/comentarios-creaedita/comentarios-creaedita.component';
import { DistritoBuscarComponent } from './page/distrito/distrito-buscar/distrito-buscar.component';
import { ComentariosBuscarComponent } from './page/comentarios/comentarios-buscar/comentarios-buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    ServiciosListarComponent,
    ServiciosCreaeditaComponent,
    ServiciosDialogoComponent,
    ServiciosBuscarComponent,
    AnuncioComponent,
    AnuncioListarComponent,
    AnuncioDialogoComponent,
    AnuncioCreaeditaComponent,
    AnuncioBuscarComponent,
    AdultoJovenComponent,
    AdultoJovenListarComponent,
    AdultoJovenInsertarComponent,
    AdultoJovenDialogoComponent,
    AdultoJovenBuscarComponent,
    EnfermeroComponent,
    EnfermeroListarComponent,
    EnfermeroDialogoComponent,
    EnfermeroCreaeditaComponent,
    InteresComponent,
    InteresListarComponent,
    InteresDialogoComponent,
    InteresCreaeditaComponent,
    InteresBuscarComponent,
    DistritoComponent,
    ComentariosComponent,
    DistritoListarComponent,
    ComentariosListarComponent,
    DistritoDialogoComponent,
    ComentariosDialogoComponent,
    DistritoCreaeditaComponent,
    ComentariosCreaeditaComponent,
    DistritoBuscarComponent,
    ComentariosBuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
