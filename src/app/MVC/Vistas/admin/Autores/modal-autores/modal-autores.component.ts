import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControladorAutoresService } from "../../../../Controladores/controlador-autores.service";
import { ControladorPaisesService } from "../../../../Controladores/controlador-paises.service";
import { PaisesInterface } from "../../../../Modelos/paises";
//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-modal-autores',
  templateUrl: './modal-autores.component.html',
  styleUrls: ['./modal-autores.component.css']
})
export class ModalAutoresComponent implements OnInit {
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Autor: new FormControl(),
      Nombre_Autor: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      Apellidos_Autor: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      Pais_Autor: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
    })
  }
  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoAutores: FormGroup;

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  constructor(
    private controladorAutoresService: ControladorAutoresService,
    private controladorPaisesService: ControladorPaisesService

  ) { //Creamos las instancia con del formulario
    this.formularioIngresoAutores = this.createFormGroup();
  }

  public listPaises: PaisesInterface[] = [];
  ngOnInit() {
    this.getListPaises();
  }

  getListPaises() {
    this.controladorPaisesService.getAllPaises().subscribe(paises => {
      this.listPaises = paises;
    });
  }

  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveAutores() {
    //new
    if (this.formularioIngresoAutores.valid) {
      this.controladorAutoresService.addAutores(this.formularioIngresoAutores.value);
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
    this.formularioIngresoAutores.reset();
  }
  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Autor() { return this.formularioIngresoAutores.get('ID_Autor'); }
  get Nombre_Autor() { return this.formularioIngresoAutores.get('Nombre_Autor'); }
  get Apellidos_Autor() { return this.formularioIngresoAutores.get('Apellidos_Autor'); }
  get Pais_Autor() { return this.formularioIngresoAutores.get('Pais_Autor'); }

}
