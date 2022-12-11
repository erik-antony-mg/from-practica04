import { Component, OnInit } from '@angular/core';
import { LibroService } from '../shared/libro.service';
import { Libro } from '../shared/libro.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit{


libros:Libro[]=[];

  constructor(private libroService:LibroService){ }

  ngOnInit(): void {
   this.libroService.listar()
   .subscribe(resp =>{
    this.libros=resp;
   })
  }
}
