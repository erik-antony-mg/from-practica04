import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http:HttpClient) { }


  listar():Observable<Libro[]>{
    return this.http.get<Libro[]>('http://localhost:9090/api/admin/libros/listar')
  }

  nuevoLibro(libro:Libro):Observable<Libro>{
    return this.http.post<Libro>('http://localhost:9090/api/admin/libros',libro)
  }

  actualizarLibro(libro:Libro):Observable<Libro>{
    return this.http.put<Libro>(`http://localhost:9090/api/admin/libros/${libro.id}`,libro)
  }
  //alt +96
  obtenerLibroById(id:number):Observable<Libro>{
    return this.http.get<Libro>(`http://localhost:9090/api/admin/libros/${id}`)
  }

  eliminarLibro(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:9090/api/admin/libros/${id}`)
  }
}
