import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
//controlador 
import { ControladorUsuariosService } from "../../../../Controladores/controlador-usuarios.service";

//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';
@Component({
  selector: 'app-modal-ingreso-usuarios',
  templateUrl: './modal-ingreso-usuarios.component.html',
  styleUrls: ['./modal-ingreso-usuarios.component.css']
})
export class ModalIngresoUsuariosComponent implements OnInit {
 
 // rutPattern: any= ^[0-9]{8,9}[-|‐]{1}[0-9kK]{1}$;
  
  //Valiacion de caracteres de email
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-A\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      id: new FormControl(),
      Rut_Usuario: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      Nombres_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      Apellido_Paterno_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      Apellido_Materno_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      Fecha_Nacimiento_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      Sexo_Usuario: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      Email_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      Telefono_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      Direccion_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    })
  }

  //Creamo la propiedad de control del formulario Usuarios
  formIngresoUsuarios: FormGroup;

  //Boton que cierra el modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;

  constructor(
    private controladorUsuariosService: ControladorUsuariosService
  ) {
    //Creamos las instancia con del formulario
    this.formIngresoUsuarios = this.createFormGroup();
  }

  ngOnInit() {
  }


  onSaveIngresoUsuarios() {
    //new
    if (this.formIngresoUsuarios.valid) {
      this.controladorUsuariosService.addUsuarios(this.formIngresoUsuarios.value);
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
    this.formIngresoUsuarios.reset();
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get id() { return this.formIngresoUsuarios.get('id'); }
  get Rut_Usuario() { return this.formIngresoUsuarios.get('Rut_Usuario'); }
  get Nombres_Usuario() { return this.formIngresoUsuarios.get('Nombres_Usuario'); }
  get Apellido_Paterno_Usuario() { return this.formIngresoUsuarios.get('Apellido_Paterno_Usuario'); }
  get Apellido_Materno_Usuario() { return this.formIngresoUsuarios.get('Apellido_Materno_Usuario'); }
  get Fecha_Nacimiento_Usuario() { return this.formIngresoUsuarios.get('Fecha_Nacimiento_Usuario'); }
  get Sexo_Usuario() { return this.formIngresoUsuarios.get('Sexo_Usuario'); }
  get Email_Usuario() { return this.formIngresoUsuarios.get('Email_Usuario'); }
  get Telefono_Usuario() { return this.formIngresoUsuarios.get('Telefono_Usuario'); }
  get Direccion_Usuario() { return this.formIngresoUsuarios.get('Direccion_Usuario'); }
    
   
}
