import { BrowserModule } from '@angular/platform-browser';
//Etiquetas extrañas
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//Importamos para utilizarla los formulario en angular
import { FormsModule } from '@angular/forms';

//Import formulario activo
import { ReactiveFormsModule} from '@angular/forms';

//Importamos el archivo para la configuración de la conexion a la base de datos 
import { environment } from '../environments/environment';

//Reutilizamos la configuracion previamente
import { AngularFireModule } from '@angular/fire';

//Importamos los modulos de firabase para la base de datos
import { AngularFireDatabaseModule } from '@angular/fire/database';

//importamos para ingreso con email
import{AngularFireAuth} from'@angular/fire/auth';
//imagen
import{AngularFireStorageModule}from'@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestore } from '@angular/fire/firestore';
//Importamos la paginacion para navegar en las paginas de la tabla
import {NgxPaginationModule} from 'ngx-pagination';
//APP
import { AppComponent } from './app.component';
//Carrucelimport { MDBBootstrapModule } from 'angular-bootstrap-md';

//Componentes
import { ListBookComponent } from './mvc/vistas/admin/list-book/list-book.component';
import { DetallesBookComponent } from './mvc/vistas/detalles-book/detalles-book.component';
import { HeroComponent } from './mvc/vistas/hero/hero.component';
import { HomeComponent } from './mvc/vistas/home/home.component';
import { ModalComponent } from './mvc/vistas/modal/modal.component';
import { NavbarComponent } from './mvc/vistas/navbar/navbar.component';
import { OffertasComponent } from './mvc/vistas/offertas/offertas.component';
import { LoginComponent } from './mvc/vistas/user/login/login.component';
import { ProfileComponent } from './mvc/vistas/user/profile/profile.component';
import { RegistrosComponent } from './mvc/vistas/user/registros/registros.component';
import { Pagina404Component } from './mvc/vistas/pagina404/pagina404.component';
import { ListAutoresComponent } from './mvc/vistas/admin/Autores/list-autores/list-autores.component';
import { ModalAutoresComponent } from './mvc/vistas/admin/Autores/modal-autores/modal-autores.component';
import { ModalCategoriasComponent } from './mvc/vistas/admin/Categorias/modal-categorias/modal-categorias.component';
import { ListCategoriasComponent } from './mvc/vistas/admin/Categorias/list-categorias/list-categorias.component';
import { ListEditorialesComponent } from './mvc/vistas/admin/Editoriales/list-editoriales/list-editoriales.component';
import { ModalEditorialesComponent } from './mvc/vistas/admin/Editoriales/modal-editoriales/modal-editoriales.component';
import { ModalLibrosComponent } from './mvc/vistas/admin/Libros/modal-libros/modal-libros.component';
import { ListLibrosComponent } from './mvc/vistas/admin/Libros/list-libros/list-libros.component';
import { ListPaisesComponent } from './mvc/vistas/admin/Paises/list-paises/list-paises.component';
import { ModalPaisesComponent } from './mvc/vistas/admin/Paises/modal-paises/modal-paises.component';
import { ListPrestamosComponent } from './mvc/vistas/admin/Prestamos/list-prestamos/list-prestamos.component';
import { ListUsuariosComponent } from './mvc/vistas/admin/Usuarios/list-usuarios/list-usuarios.component';
import { ModalIngresoUsuariosComponent } from './mvc/vistas/admin/Usuarios/modal-ingreso-usuarios/modal-ingreso-usuarios.component';
import { ModalEditarUsuariosComponent } from './mvc/vistas/admin/Usuarios/modal-editar-usuarios/modal-editar-usuarios.component';
import { ModalEditarPrestamosComponent } from './mvc/vistas/admin/Prestamos/modal-editar-prestamos/modal-editar-prestamos.component';
import { ModalIngresoPrestamosComponent } from './mvc/vistas/admin/Prestamos/modal-ingreso-prestamos/modal-ingreso-prestamos.component';
import { ModalEditarLibrosComponent } from './mvc/vistas/admin/libros/modal-editar-libros/modal-editar-libros.component';
import { FilterAutorPipe } from './mvc/pipes/filter-autor.pipe';
import { FilterCategoriasPipe } from './mvc/pipes/filter-categorias.pipe';
import { FilterEditorialesPipe } from './mvc/pipes/filter-editoriales.pipe';
import { FilterLibrosPipe } from './mvc/pipes/filter-libros.pipe';
import { FilterPaisesPipe } from './mvc/pipes/filter-paises.pipe';
import { FilterPrestamosPipe } from './mvc/pipes/filter-prestamos.pipe';
import { FilterUsuariosPipe } from './mvc/pipes/filter-usuarios.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    DetallesBookComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffertasComponent,
    LoginComponent,
    ProfileComponent,
    RegistrosComponent,
    Pagina404Component,
    ListAutoresComponent,
    ModalAutoresComponent,
    ModalCategoriasComponent,
    ListCategoriasComponent,
    ListEditorialesComponent,
    ModalEditorialesComponent,
    ModalLibrosComponent,
    ListLibrosComponent,
    ListPaisesComponent,
    ModalPaisesComponent,
    ListPrestamosComponent,
    ListUsuariosComponent,
    ModalIngresoUsuariosComponent,
    ModalEditarUsuariosComponent,
    ModalEditarPrestamosComponent,
    ModalIngresoPrestamosComponent,
    ModalEditarLibrosComponent,
    FilterAutorPipe,
    FilterCategoriasPipe,
    FilterEditorialesPipe,
    FilterLibrosPipe,
    FilterPaisesPipe,
    FilterPrestamosPipe,
    FilterUsuariosPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //utiliza un metodo para iniciar la configuracion desde la conexión a firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //Inyectamos el fire data module
    AngularFireDatabaseModule,
    AngularFireStorageModule,
     //Agregamos la paginacion para todas la páginas
     NgxPaginationModule,
     //Formulario reactivo
     ReactiveFormsModule,
    
 
  ],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent],
  ///
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
