import { Injectable } from '@angular/core';
//importamos para ingreso con email
import { AngularFireAuth } from '@angular/fire/auth';
//importamo el map
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
//Verficacion de Admin y editor
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UsersInterface } from "../Modelos/users";
@Injectable({
  providedIn: 'root'
})
export class ControladorAuthService {
  //Injectamos en nuestro contructo
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) { }
  //Creamos un método para registrar usuarios con dos parametros
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      //Llamamos al método para crear usuarios
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }

  //Creamos un método para Ingreso de usuarios
  loginUsuarios() { }
  //Creamos un método para Ingreso por email de los usuarios
  loginEmailUser(email: string, pass: string) {
    //
    return new Promise((resolve, reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => console.log(reject(err)))
    });
  }
  
  //Creamos un método para Ingreso por facebook de los usuarios
  loginFacebookUsurios() { }
  //Creamos un método para Ingreso de google de los usuarios
  loginGoogleUser() {
    //Abrimos una ventana flotante con este método
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }
  //Creamos un método para Ingreso de usuarios registrados por firebase
  logoutUser() {
    return this.angularFireAuth.auth.signOut();
  }
  //Creamos el metodo para ver si el usuario esta logeado
  isAuth() {
    return this.angularFireAuth.authState.pipe(map(auth => auth));
  }
  //Roles cuando se cree cuenta
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const data: UsersInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        admin: true
      }
    }
    return userRef.set(data, { merge: true })
  }
  //Verificacion de usuario admin
  isUserAdmin(userUid) {
    return this.angularFirestore.doc<UsersInterface>(`users/${userUid}`).valueChanges();

  }
}
