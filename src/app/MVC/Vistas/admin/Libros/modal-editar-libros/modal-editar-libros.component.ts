//
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//Controladores
import { ControladorAutoresService } from "../../../../Controladores/controlador-autores.service";
import { ControladorCategoriasService } from "../../../../Controladores/controlador-categorias.service";
import { ControladorEditorialesService } from "../../../../Controladores/controlador-editoriales.service";
import { ControladorLibrosService } from "../../../../Controladores/controlador-libros.service";

//Modelos
import { AutoresInterface } from "../../../../Modelos/autores";
import { CategoriasInterface } from "../../../../Modelos/categorias";
import { EditorialesInterface } from "../../../../Modelos/editoriales";
//Formulario
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-libros',
  templateUrl: './modal-editar-libros.component.html',
  styleUrls: ['./modal-editar-libros.component.css']
})
export class ModalEditarLibrosComponent implements OnInit {

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  constructor(
    private controladorAutoresService: ControladorAutoresService,
    private controladorCategoriasService: ControladorCategoriasService,
    private controladorEditorialesService: ControladorEditorialesService,
    private controladorLibrosService: ControladorLibrosService

  ) { }

  public listAutores: AutoresInterface[] = [];
  public listCategorias: CategoriasInterface[] = [];
  public listEditoriales: EditorialesInterface[] = [];

  ngOnInit() {
    this.getListAutores();
    this.getListCategorias();
    this.getListEditoriales();
  }

  getListAutores() {
    this.controladorAutoresService.getAllAutores().subscribe(autores => {
      this.listAutores = autores;
    });
  }

  getListCategorias() {
    this.controladorCategoriasService.getAllCategorias().subscribe(categorias => {
      this.listCategorias = categorias;
    });
  }

  getListEditoriales() {
    this.controladorEditorialesService.getAllEditoriales().subscribe(editoriales => {
      this.listEditoriales = editoriales;
    });
  }


  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveEditarLibros(formEditarLibros: NgForm): void {
    //new
    if (formEditarLibros.value.ID_Libro === null) {
      this.controladorLibrosService.addLibros(formEditarLibros.value);
      alert("Guardado Correctamente!");
    } else {
      //Insertamos todos los datos del formulario
      this.controladorLibrosService.updateLibros(formEditarLibros.value);
      //limpiamos todos los datos depues de agregarlos
      alert("Actualizado Correctamente!");
    }
    formEditarLibros.resetForm();
    this.btnClose.nativeElement.click();
  }

  resetForm(formEditarLibros?: NgForm) {
    //Si el formulario tiene datos lo reiniciamos
    if (formEditarLibros != null) {
      formEditarLibros.reset();
    }
  }
}
