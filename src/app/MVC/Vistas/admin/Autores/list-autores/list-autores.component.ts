import { Component, OnInit } from '@angular/core';
import { AutoresInterface } from "../../../../Modelos/autores";
import { ControladorAutoresService } from "../../../../Controladores/controlador-autores.service";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-list-autores',
  templateUrl: './list-autores.component.html',
  styleUrls: ['./list-autores.component.css']
})
export class ListAutoresComponent implements OnInit {

  constructor(
    private controladorAutoresService: ControladorAutoresService
  ) { }
  //Varible de la paginación
  filtroAutor:'';
  //Agregamos la paginacion
  pageActual: number = 1;

  autores: AutoresInterface []=[] ;
  public listAutores: AutoresInterface [] = [];

  ngOnInit() {
    this.getListAutores();
  }

  getListAutores() {
    this.controladorAutoresService.getAllAutores().subscribe(autores => {
      this.listAutores = autores;
    });
  }
  
  onDelete(ID_Autor: string) {
    const confirmacion = confirm("Estas seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.controladorAutoresService.deleteAutores(ID_Autor);
      alert("Eliminado Correctamente!");
    }
  }
}
