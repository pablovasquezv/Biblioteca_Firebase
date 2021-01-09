import { Component, OnInit } from '@angular/core';
import { PrestamosInterface } from "../../../../Modelos/prestamos";
import { ControladorPrestamosService } from "../../../../Controladores/controlador-prestamos.service";
//verificación de Admin
import { ControladorAuthService } from '../../../../Controladores/controlador-auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersInterface } from '../../../../Modelos/users';
@Component({
  selector: 'app-list-prestamos',
  templateUrl: './list-prestamos.component.html',
  styleUrls: ['./list-prestamos.component.css']
})
export class ListPrestamosComponent implements OnInit {

  constructor(
    private controladorPrestamosService: ControladorPrestamosService,
    private controladorAuthService: ControladorAuthService
  ) { }

  public listPrestamos: PrestamosInterface[] = [];
  //Propiedades para verficar admin
  public isAdmin: any = null;
  public userUid: string = null;

  //Filtro Búsqueda
  filtroPrestamos: '';

  //Agregamos la paginacion
  pageActual: number = 1;
  //Creamos un método para ver si el usuario es administrador
  getCurrentUser() {
    this.controladorAuthService.isAuth().subscribe(auth => {
      //Creamos una condicion para ver si el usuario esta loggeado
      if (auth) {
        this.userUid = auth.uid;
        this.controladorAuthService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles);
          this.isAdmin = this.isAdmin.hasOwnProperty('admin');
          //this.isAdmin= true;
        })
      }
    });
  }

  ngOnInit() {
    this.getListPrestamos();
    this.getCurrentUser();
  }

  getListPrestamos() {
    this.controladorPrestamosService.getAllPrestamos().subscribe(prestamos => {
      this.listPrestamos = prestamos;
    });
  }

  onEdit(prestamo: PrestamosInterface) {
    this.controladorPrestamosService.selectPrestamos = Object.assign({}, prestamo);
  }

  onDelete(ID_Prestamo: string) {
    const confirmacion = confirm("Estas Seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.controladorPrestamosService.deletePrestamos(ID_Prestamo);
      alert("Eliminado Correctamente!");
    }
  }

}
