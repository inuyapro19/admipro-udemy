import { NgModule } from '@angular/core';
//rutas
import { PAGES_ROUTES } from './pages.routes';
//modulo
import { SharedModule } from '../shared/shared.module';

//componente
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';




@NgModule ({
  declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
 imports:[
    SharedModule,
    PAGES_ROUTES
 ]
 
})

export class PagesModule{}

