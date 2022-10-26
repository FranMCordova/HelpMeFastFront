import { InteresCreaeditaComponent } from './page/interes/interes-creaedita/interes-creaedita.component';
import { InteresComponent } from './page/interes/interes.component';
import { EnfermeroCreaeditaComponent } from './page/enfermero/enfermero-creaedita/enfermero-creaedita.component';
import { EnfermeroComponent } from './page/enfermero/enfermero.component';
import { AdultoJovenInsertarComponent } from './page/adulto-joven/adulto-joven-insertar/adulto-joven-insertar.component';
import { AdultoJovenComponent } from './page/adulto-joven/adulto-joven.component';
import { AnuncioCreaeditaComponent } from './page/anuncio/anuncio-creaedita/anuncio-creaedita.component';
import { AnuncioComponent } from './page/anuncio/anuncio.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiciosCreaeditaComponent} from './page/servicios/servicios-creaedita/servicios-creaedita.component'

const routes: Routes = [
  {path:'servicios',component:ServiciosComponent, children: [
    { path: 'nuevo', component: ServiciosCreaeditaComponent },
    { path: 'edicion/:id', component: ServiciosCreaeditaComponent }
  ]},{
    path:'anuncios',component: AnuncioComponent, children:[
      {path:'nuevo', component: AnuncioCreaeditaComponent},
      {path:'edicion/:id', component: AnuncioCreaeditaComponent}
    ]
  },{
  path: 'adultoJoven', component: AdultoJovenComponent, children: [
    { path: 'insertar', component: AdultoJovenInsertarComponent },
    { path: 'edicion/:id', component: AdultoJovenInsertarComponent }
   ]},{
    path: 'enfermeros', component: EnfermeroComponent, children : [
      { path: 'nuevo', component: EnfermeroCreaeditaComponent },
      { path: 'edicion/:id', component: EnfermeroCreaeditaComponent }
    ]},{
      path: 'intereses', component: InteresComponent, children: [
        { path: 'nuevo', component: InteresCreaeditaComponent },
        { path: 'edicion/:id', component: InteresCreaeditaComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
