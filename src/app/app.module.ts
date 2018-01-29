import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas

import { APP_ROUTES } from './app.routes';
//modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,   
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
