import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { Libro } from '../../libros/shared/libro.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:9090/api/admin/usuarios/listar')
  }

  nuevoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:9090/api/admin/usuarios', usuario)
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:9090/api/admin/usuarios/${id}`)
  }

}
