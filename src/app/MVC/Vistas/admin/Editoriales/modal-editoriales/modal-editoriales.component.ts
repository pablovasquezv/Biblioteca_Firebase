import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControladorEditorialesService } from "../../../../Controladores/controlador-editoriales.service";
//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-modal-editoriales',
  templateUrl: './modal-editoriales.component.html',
  styleUrls: ['./modal-editoriales.component.css']
})
export class ModalEditorialesComponent implements OnInit {
   //Creamos un form group par validar las celdas del modal
   createFormGroup() {
    return new FormGroup({
      ID_Editorial: new FormControl(),
      Nombre_Editorial: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      Descripcion_Editorial: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
    })
  }
  
  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoEditoriales: FormGroup;

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;

  constructor(
    private controladorEditorialesService : ControladorEditorialesService 
  ) {  
    //Creamos las instancia con del formulario
    this.formularioIngresoEditoriales = this.createFormGroup();
  }

  ngOnInit() {
  }

  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveEditoriales() {
    //new
    if (this.formularioIngresoEditoriales.valid) {
      this.controladorEditorialesService.addEditoriales(this.formularioIngresoEditoriales.value);
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
    this.formularioIngresoEditoriales.reset();
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Editorial() { return this.formularioIngresoEditoriales.get('ID_Editorial'); }
  get Nombre_Editorial() { return this.formularioIngresoEditoriales.get('Nombre_Editorial'); }
  get Descripcion_Editorial() { return this.formularioIngresoEditoriales.get('Descripcion_Editorial'); }

}
