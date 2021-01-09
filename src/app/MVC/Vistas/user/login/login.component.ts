import { Component, OnInit } from '@angular/core';
//importamos para ingreso con email
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
//Importamos la ruta
import { Router } from '@angular/router';
//Importamos el controlador de servicios
import { ControladorAuthService } from "../../../Controladores/controlador-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Agregamos dentro del constructor el 
  constructor(
    public angularFireAuth: AngularFireAuth,
    private router: Router,
    private controladorAuthService: ControladorAuthService
  ) { }
  ///Creamos las propiedades publicas 
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }
  onLogin(): void {
    //console.log('email',this.email);
    //console.log('password',this.password);
   this.controladorAuthService.loginEmailUser(this.email, this.password)
    .then((res) =>{
      this.onLoginRedirect();
      alert("Bienvenido a la Biblioteca Virtual del Complejos Educacion Luis Durand D.!");
    }).catch(err => {
      alert("NO TIENES PERMISOS PARA HACER USO DE ESTA APLICACION!!");
      this.noLoginRedirect();
    });
      //console.log('err',err.message));
  }
  //Creamos el método de inicion del login
  onLoginGoogle(): void 
  {
    //Abrimos una ventana flotante con este método
    //this.  angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    //Llamamos al método
    this.controladorAuthService.loginGoogleUser()
      .then((res) =>
       {
        console.log('resUser', res);
        this.onLoginRedirect();
      }).catch(error => console.log('Error', error.message));

    //Una vez registrado lo enviamos al unicio de la pagina
    //this.router.navigate(['admin/list-book']);
  }
  //Creamos el método de logeeo
  onLogout() {
    //
    this.angularFireAuth.auth.signOut();
  }
  ///video 9
  //Creamos un método para direccionar al loggearse
  onLoginRedirect(): void {
    this.router.navigate(['Prestamos']);
  }
   //Creamos un método para direccionar a usuario no loggearse
   noLoginRedirect(): void {
    this.router.navigate(['/Home']);
  }
}
