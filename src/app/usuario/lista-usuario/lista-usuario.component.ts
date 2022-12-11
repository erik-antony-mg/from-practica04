import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { LibroService } from '../../libros/shared/libro.service';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuario()
      .subscribe(response => {
        console.log(response);
        this.usuarios = response;
      })
  }

}
