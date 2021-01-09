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

//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-modal-libros',
  templateUrl: './modal-libros.component.html',
  styleUrls: ['./modal-libros.component.css']
})
export class ModalLibrosComponent implements OnInit {
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Libro: new FormControl(),
      Titulo_Libro: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      Fecha_Edicion_Libro: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      ID_Autor_Libro: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
      ID_Categoria_Libro: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
      ID_Editorial_Libro: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
      Descripcion_Libro: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
    })
  }
  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoLibros: FormGroup;

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  constructor(
    private controladorAutoresService: ControladorAutoresService,
    private controladorCategoriasService: ControladorCategoriasService,
    private controladorEditorialesService: ControladorEditorialesService,
    private controladorLibrosService: ControladorLibrosService

  ) {
    //Creamos las instancia con del formulario
    this.formularioIngresoLibros = this.createFormGroup();
   }

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
  onSaveIngresoLibros() {
     //new
     if (this.formularioIngresoLibros.valid) {
      this.controladorLibrosService.addLibros(this.formularioIngresoLibros.value);
      alert("Guardado Correctamente!");
     //Limpiamos el Formulario
     this.onReserForm();
     //Cerramos el modal
     this.btnClose.nativeElement.click();
   } else {
     alert("Ingresar datos en todos los campos requeridos!!");
   }
}

//Limpieza de formulario
onReserForm() {
  this.formularioIngresoLibros.reset();
}

//Creamos los gett de formulario para que reconosca las propiedades.
get ID_Libro() { return this.formularioIngresoLibros.get('ID_Libro'); }
get Titulo_Libro() { return this.formularioIngresoLibros.get('Titulo_Libro'); }
get Fecha_Edicion_Libro() { return this.formularioIngresoLibros.get('Fecha_Edicion_Libro'); }
get ID_Autor_Libro() { return this.formularioIngresoLibros.get('ID_Autor_Libro'); }
get ID_Categoria_Libro() { return this.formularioIngresoLibros.get('ID_Categoria_Libro'); }
get ID_Editorial_Libro() { return this.formularioIngresoLibros.get('ID_Editorial_Libro'); }
get Descripcion_Libro() { return this.formularioIngresoLibros.get('Descripcion_Libro'); }

}
