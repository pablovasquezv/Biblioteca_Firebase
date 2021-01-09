import { Component, OnInit } from '@angular/core';
import { UsuariosInterface } from "../../../../Modelos/usuarios";
import { ControladorUsuariosService } from "../../../../Controladores/controlador-usuarios.service";
@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  constructor(
    private controladorUsuariosService: ControladorUsuariosService
  ) { }

  //Filtro Búsqueda
  filtroUsuarios: '';

  //Agregamos la paginacion
  pageActual: number = 1;
  
  public listUsuarios: UsuariosInterface[] = [];
  ngOnInit() {
    this.getListUsuarios();
  }

  getListUsuarios() {
    this.controladorUsuariosService.getAllUsuarios().subscribe(usuarios => {
      this.listUsuarios = usuarios;
    });
  }

  onEdit(usuario: UsuariosInterface) {
    this.controladorUsuariosService.selectUsuarios = Object.assign({}, usuario);
  }

  onDelete(ID_Usuario: string) {
    const confirmacion = confirm("Estas Seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.controladorUsuariosService.deleteusuarioes(ID_Usuario);
      alert("Eliminado Correctamente!");
    }
  }
}
