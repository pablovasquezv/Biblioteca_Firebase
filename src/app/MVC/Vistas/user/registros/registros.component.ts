import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//importamos  servicio
import { ControladorAuthService } from "../../../Controladores/controlador-auth.service";
//imagen
import { AngularFireStorage } from '@angular/fire/storage';
//Recuperdador de imagen
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
//Rutas
import { Router } from "@angular/router"

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  constructor(
    private router: Router,
    private controladorAuthService: ControladorAuthService,
    private angularFireStorage: AngularFireStorage
  ) { }

  @ViewChild('imageUser', { static: true }) inputImageUser: ElementRef;
  //Creasmos los argumentos
  public email: string = '';
  public password: string = '';
  //Prop. Imag
  oploadPercent: Observable<number>;
  urlImagen: Observable<string>;

  ngOnInit() {
  }
  //Seleccion de Imagen
  onUpload(e) {
    //mostrar en consola todo el proceso
    //console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.angularFireStorage.ref(filePath);
    const task = this.angularFireStorage.upload(filePath, file);
    //Recuperar Img
    this.oploadPercent = task.percentageChanges(),
      task.snapshotChanges().pipe(finalize(() => this.urlImagen = ref.getDownloadURL())).subscribe();
  }
  //Creamos un método para ingresar Usuarios
  onAddUser() {
    //Verificamos los campos
    //console.log('email',this.email);
    //console.log('password',this.password);
    //Llamamos al método que crea usuarios y pasamos los dos parametros
    this.controladorAuthService.registerUser(this.email, this.password)
      .then((res) => {//Dirigimos a nuestro usuarios a na ruta especifica
        this.onLoginRedirect();
        alert("Bienvenido a la Biblioteca Virtual del Complejos Educacion Luis Durand D.!");
      }).catch(err => console.log('err', err.message));
  }
  
  //Creamos el método de inicion del login
  onLoginGoogle(): void {
    //Abrimos una ventana flotante con este método
    //this.  angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    //Llamamos al método
    this.controladorAuthService.loginGoogleUser()
      .then((res) => {
        console.log('resUser', res);
        this.onLoginRedirect();
        alert("Bienvenido a la Biblioteca Virtual del Complejos Educacion Luis Durand D.!");
      }).catch(error => {
        console.log('Error', error)
        this.registerUser();
        alert("No estas Registrado en la Biblioteca Virtual del Complejos Educacion Luis Durand D.! Debes registrate!")
      });
    // catch(error => console.log('Error', error.message));
  }

  ///video 9
  //Creamos un método para redirecionar al ingresar
  onLoginRedirect(): void {
    this.router.navigate(['Prestamos']);
  }
 
  //Creamos un método para redirecionar al no estar registrado
  registerUser(): void {
    this.router.navigate(['/user/registros']);
  }
}
