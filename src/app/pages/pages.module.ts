import { NgModule } from '@angular/core';
//rutas
import { PAGES_ROUTES } from './pages.routes';
//modulo
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
//componente
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';





@NgModule ({
  declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
 imports:[
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
 ]
 
})

export class PagesModule{}

