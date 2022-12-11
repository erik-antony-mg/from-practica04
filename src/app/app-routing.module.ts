import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: ListaLibrosComponent
  },
  {
    path: 'nuevo',
    component: FormLibroComponent
  },
  {
    path: 'editar/:id',
    component: FormLibroComponent
  },
  {
    path: 'usuarios',
    component: ListaUsuarioComponent
  },
  {
    path: 'usuarios/nuevo',
    component: FormUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
