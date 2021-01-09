import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//Controlador
import { ControladorPaisesService } from "../../../../Controladores/controlador-paises.service";

//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';
@Component({
  selector: 'app-modal-paises',
  templateUrl: './modal-paises.component.html',
  styleUrls: ['./modal-paises.component.css']
})
export class ModalPaisesComponent implements OnInit {
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Pais: new FormControl(),
      Nombre_Pais: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    })
  }

  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoPaises: FormGroup;
  
  //Cerrar modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  
  constructor(
    private controladorPaisesService: ControladorPaisesService
  ) {
    //Creamos las instancia con del formulario
    this.formularioIngresoPaises = this.createFormGroup();
  }


  ngOnInit() {
  }
  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSavePais(){
    //new
    if (this.formularioIngresoPaises.valid) {
        this.controladorPaisesService.addPais(this.formularioIngresoPaises.value);
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
    this.formularioIngresoPaises.reset();
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Pais() { return this.formularioIngresoPaises.get('ID_Pais'); }
  get Nombre_Pais() { return this.formularioIngresoPaises.get('Nombre_Pais'); }

}
