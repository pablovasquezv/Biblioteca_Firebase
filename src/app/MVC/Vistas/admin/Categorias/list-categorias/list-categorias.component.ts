import { Component, OnInit } from '@angular/core';
import { CategoriasInterface } from "../../../../Modelos/categorias";
import { ControladorCategoriasService } from "../../../../Controladores/controlador-categorias.service";
@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit {

  constructor(
    private controladorCategoriasService : ControladorCategoriasService 
  ) { }
  //Varible de la paginación
  filtroCategorias:'';
  //Agregamos la paginacion
  pageActual: number = 1;
  
  public listCategorias:CategoriasInterface[] = [];
  ngOnInit() {
    this.getListCategorias();
  }
  getListCategorias() {
    this.controladorCategoriasService.getAllCategorias().subscribe(categorias => {
      this.listCategorias = categorias;
    });
  }

  onDelete(ID_Categoria: string) {
    const confirmacion = confirm("Estas seguro de querer Eliminarla?");
    if (confirmacion) {
      this.controladorCategoriasService.deleteCategorias(ID_Categoria);
      alert("Eliminada Correctamente!");
    }
  }
}
