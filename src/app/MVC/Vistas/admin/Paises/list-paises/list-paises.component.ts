import { Component, OnDestroy, OnInit } from '@angular/core';
import {  HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { PaisesInterface } from "../../../../Modelos/paises";
import { ControladorPaisesService } from "../../../../Controladores/controlador-paises.service";
import { DataTablesResponse  } from "../../../../Modelos/data-tables-response";

@Component({
  selector: 'app-list-paises',
  templateUrl: './list-paises.component.html',
  styleUrls: ['./list-paises.component.css']
})
export class ListPaisesComponent implements OnInit {
  
  constructor(
    private controladorPaisesService: ControladorPaisesService
  ) { }
  //Variable de filtro
  filtroPaises:'';

  //Agregamos la paginacion
  pageActual: number = 1;

  public listPaises: PaisesInterface [] =[];
  ngOnInit() {
    this.getListPaises();
  }
  
  getListPaises(){
    this.controladorPaisesService.getAllPaises().subscribe(paises =>
      {
    this.listPaises = paises;
    });
  }
  onDelete(ID_Pais: string) {
    const confirmacion = confirm("Estas seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.controladorPaisesService.deletePais(ID_Pais);
      alert("Eliminado Correctamente!");
    }
  }

}
