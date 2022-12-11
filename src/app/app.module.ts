import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    FormLibroComponent,
    ListaUsuarioComponent,
    FormUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
