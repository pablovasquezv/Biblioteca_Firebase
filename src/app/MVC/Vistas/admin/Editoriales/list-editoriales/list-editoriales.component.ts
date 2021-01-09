import { Component, OnInit } from '@angular/core';
import { EditorialesInterface } from "../../../../Modelos/editoriales";
import { ControladorEditorialesService } from "../../../../Controladores/controlador-editoriales.service";
@Component({
  selector: 'app-list-editoriales',
  templateUrl: './list-editoriales.component.html',
  styleUrls: ['./list-editoriales.component.css']
})
export class ListEditorialesComponent implements OnInit {

  constructor(
    private controladorEditorialesService: ControladorEditorialesService
  ) { }

  //Variable de búsqueda
  filtroEditoriales: '';
  
  //Agregamos la paginacion
  pageActual: number = 1;

  public listEditoriales: EditorialesInterface[] = [];
  ngOnInit() {
    this.getListEditoriales();
  }

  getListEditoriales() {
    this.controladorEditorialesService.getAllEditoriales().subscribe(editoriales => {
      this.listEditoriales = editoriales;
    });
  }
  onDelete(ID_Editorial: string) {
    const confirmacion = confirm("Estas Seguro de querer Eliminarla?");
    if (confirmacion) {
      this.controladorEditorialesService.deleteEditoriales(ID_Editorial);
      alert("Eliminada Correctamente!");
    }
  }
}
