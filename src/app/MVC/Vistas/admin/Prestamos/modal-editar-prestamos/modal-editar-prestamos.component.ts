import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//Controladores
import { ControladorLibrosService } from "../../../../Controladores/controlador-libros.service";
import { ControladorPrestamosService } from "../../../../Controladores/controlador-prestamos.service";
import { ControladorUsuariosService } from "../../../../Controladores/controlador-usuarios.service";

//Modelos
import { UsuariosInterface } from "../../../../Modelos/usuarios";
import { LibrosInterface } from "../../../../Modelos/libros";

//Formulario
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-prestamos',
  templateUrl: './modal-editar-prestamos.component.html',
  styleUrls: ['./modal-editar-prestamos.component.css']
})
export class ModalEditarPrestamosComponent implements OnInit {

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  constructor(
    private controladorLibrosService: ControladorLibrosService,
    private controladorPrestamosService: ControladorPrestamosService,
    private controladorUsuariosService: ControladorUsuariosService
  ) { }

  public listUsuarios: UsuariosInterface[] = [];
  public listLibros: LibrosInterface[] = [];

  ngOnInit() {
    this.getListLibros();
    this.getListUsuarios();
  }

  getListLibros() {
    this.controladorLibrosService.getAllLibros().subscribe(libros => {
      this.listLibros = libros;
    });
  }

  getListUsuarios() {
    this.controladorUsuariosService.getAllUsuarios().subscribe(usuarios => {
      this.listUsuarios = usuarios;
    });
  }

  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveEditarPrestamos(formEditarPrestamos: NgForm): void {
    //new
    if (formEditarPrestamos.value.ID_Prestamo === null) {
      this.controladorPrestamosService.addPrestamos(formEditarPrestamos.value);
      alert("Guardado Correctamente!");
    } else {
      //Insertamos todos los datos del formulario
      this.controladorPrestamosService.updatePrestamos(formEditarPrestamos.value);
      //limpiamos todos los datos depues de agregarlos
      alert("Actualizado Correctamente!");
    }
    formEditarPrestamos.resetForm();
    this.btnClose.nativeElement.click();
  }
  resetForm(formIngresoPrestamos?: NgForm) {
    //Si el formulario tiene datos lo reiniciamos
    if (formIngresoPrestamos != null) {
      formIngresoPrestamos.reset();
    }
  }
}
