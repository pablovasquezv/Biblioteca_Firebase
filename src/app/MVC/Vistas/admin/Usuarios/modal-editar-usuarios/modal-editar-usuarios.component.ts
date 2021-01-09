import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControladorUsuariosService } from "../../../../Controladores/controlador-usuarios.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-usuarios',
  templateUrl: './modal-editar-usuarios.component.html',
  styleUrls: ['./modal-editar-usuarios.component.css']
})
export class ModalEditarUsuariosComponent implements OnInit {

  @ViewChild('btnClose', { static: true }) 
  btnClose: ElementRef;
  constructor(
    private controladorUsuariosService: ControladorUsuariosService
  ) { }

  ngOnInit() {
  }

  onSaveEditarUsuarios(formEditarUsuarios: NgForm): void {
    //new
    if (formEditarUsuarios.value.ID_Usuario === null) {
      this.controladorUsuariosService.addUsuarios(formEditarUsuarios.value);
      alert("Guardado Correctamente!");
    } else {
      //Insertamos todos los datos del formulario
      this.controladorUsuariosService.updateUsuarios(formEditarUsuarios.value);
      //limpiamos todos los datos depues de agregarlos
      alert("Actualizado Correctamente!");
    }
    formEditarUsuarios.resetForm();
    this.btnClose.nativeElement.click();
  }

  resetForm(formEditarUsuarios?: NgForm) {
    //Si el formulario tiene datos lo reiniciamos
    if (formEditarUsuarios != null) {
      formEditarUsuarios.reset();
    }
  }

}
