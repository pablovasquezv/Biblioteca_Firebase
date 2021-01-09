import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControladorCategoriasService } from "../../../../Controladores/controlador-categorias.service";
//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-modal-categorias',
  templateUrl: './modal-categorias.component.html',
  styleUrls: ['./modal-categorias.component.css']
}) 
export class ModalCategoriasComponent implements OnInit {
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Categoria: new FormControl(),
      Nombre_Categoria: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      Descripcion_Categoria: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
    })
  }
  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoCategorias: FormGroup;

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  constructor(
    private controladorCategoriasService: ControladorCategoriasService
  ) { 
    //Creamos las instancia con del formulario
    this.formularioIngresoCategorias = this.createFormGroup();
  }

  ngOnInit() {
  }
  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveCategorias() {
    //new
    if (this.formularioIngresoCategorias.valid) {
      this.controladorCategoriasService.addCategorias(this.formularioIngresoCategorias.value);
      alert("Guardado Correctamente!");
      //Limpiamos el Formulario
      this.onReserForm();
      //Cerramos el modal
      this.btnClose.nativeElement.click();
    } else {
      alert("Se debe ingresar datos en todos los campos!!");
    }
  }
  //Limpieza de formulario
  onReserForm() {
    this.formularioIngresoCategorias.reset();
  }
  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Categoria() { return this.formularioIngresoCategorias.get('ID_Categoria'); }
  get Nombre_Categoria() { return this.formularioIngresoCategorias.get('Nombre_Categoria'); }
  get Descripcion_Categoria() { return this.formularioIngresoCategorias.get('Descripcion_Categoria'); }

}

