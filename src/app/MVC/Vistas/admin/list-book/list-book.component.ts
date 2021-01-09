import { Component, OnInit } from '@angular/core';
import { BooksInterface } from "../../../Modelos/books";
import { ControladorDataApiService } from "../../../Controladores/controlador-data-api.service";
//verificación de Admin
import { ControladorAuthService } from '../../../Controladores/controlador-auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersInterface } from '../../../Modelos/users';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(
    private controladorDataApiService: ControladorDataApiService,
    private controladorAuthService: ControladorAuthService
  ) { }
  //Agregamos la paginacion
  pageActual: number = 1;
  //Arreglo de libros
  public books: BooksInterface[] = [];

  //Propiedades para verficar admin
  public isAdmin: any = null;
  public userUid: string = null;
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
    this.getListBooks();
    this.getCurrentUser();
  }

  getListBooks() {
    this.controladorDataApiService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }
  onDelete(ID_Book: string) {
    const confirmacion = confirm("Estas seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.controladorDataApiService.deleteBook(ID_Book);
      alert("Eliminado Correctamente!");
    }
  }
  onEdit(book: BooksInterface) {
    this.controladorDataApiService.selectBook = Object.assign({}, book);
  }
}
