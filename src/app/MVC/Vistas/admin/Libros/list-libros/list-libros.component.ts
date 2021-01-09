import { Component, OnInit } from '@angular/core';
//Modelos
import { LibrosInterface } from "../../../../Modelos/libros";
import { AutoresInterface } from "../../../../Modelos/autores";
//Servicion
import { ControladorLibrosService } from "../../../../Controladores/controlador-libros.service";
import { ControladorAutoresService } from "../../../../Controladores/controlador-autores.service";
@Component({
  selector: 'app-list-libros',
  templateUrl: './list-libros.component.html',
  styleUrls: ['./list-libros.component.css']
})
export class ListLibrosComponent implements OnInit {

  constructor(
    private controladorLibrosService: ControladorLibrosService,
    private controladorAutoresService :ControladorAutoresService 
  ) { }

  //Variable de búsqueda
  filtroLibros: '';
  //Agregamos la paginacion
  pageActual: number = 1;

  //Arreglo de lista de libros
  public listLibros: LibrosInterface[] = [];

  autores: AutoresInterface []=[] ;
   //Arreglo de lista de Autores
  public listAutores: AutoresInterface [] = [];

  ngOnInit() {
    this.getListLibros();
    this.getListAutores();
  }

  getListLibros() {
    this.controladorLibrosService.getAllLibros().subscribe(libros => {
      this.listLibros = libros;
    });
  }
  getListAutores() {
    this.controladorAutoresService.getAllAutores().subscribe(autores => {
      this.listAutores = autores;
    });
  }
  onEdit(libros: LibrosInterface) {
    this.controladorLibrosService.selectLibros = Object.assign({}, libros);
  }
  onDelete(ID_Libro: string) {
    const confirmacion = confirm("Estas Seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.controladorLibrosService.deleteLibros(ID_Libro);
      alert("Eliminado Correctamente!");
    }
  }
}
