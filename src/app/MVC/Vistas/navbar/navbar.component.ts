import { Component, OnInit } from '@angular/core';
//importamos nuestro controlador de servicio
import { ControladorAuthService } from "../../Controladores/controlador-auth.service";
//importamos para ingreso con email
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersInterface } from '../../Modelos/users';

import { auth } from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Inyectamos le controlador en nuestro servidor
  constructor(
    private controladorAuthService: ControladorAuthService,
    private angularFireAuth: AngularFireAuth
    )
    { }
  //Agregamos el nombre de la aplicacion
  public app_name: string = 'Biblioteca';
  //Creamos la propiedad Boleana para verificar si un usuario esta registrado
  public isLogged: boolean = false;

  //Propiedades para verficar admin
  public isAdmin: any = null;
  public userUid: string = null;

  //Creamos un método para ver si el usuario es administrador
  getCurrentAdmin() {
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
    //Inciamos el método
    this.getCurrentUser();
    this.getCurrentAdmin();
  }

  //Creamos un método para ver si el usuario esta registrado
  getCurrentUser() {
    this.controladorAuthService.isAuth().subscribe(auth => {
      //Creamos una condicion para ver si el usuario esta loggeado
      if (auth) {
        console.log('Usuario logeeado');
        this.isLogged = true;
      } else {
        console.log('Usuario no existe');
        this.isLogged = false;
      }
    });
  }
  //Creamos el método de logeeo
  //Creamos el método de salida de la aplicación
  onLogout() {
    //
    this.angularFireAuth.auth.signOut();
    alert("Saliendo......");
  }
}
