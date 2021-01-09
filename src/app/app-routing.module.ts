import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mvc/vistas/home/home.component';
import { OffertasComponent } from './mvc/vistas/offertas/offertas.component';
import { DetallesBookComponent } from './mvc/vistas/detalles-book/detalles-book.component';
import { ListBookComponent } from './mvc/vistas/admin/list-book/list-book.component';
import { LoginComponent } from './mvc/vistas/user/login/login.component';
import { RegistrosComponent } from './mvc/vistas/user/registros/registros.component';
import { ProfileComponent } from './mvc/vistas/user/profile/profile.component';
import { Pagina404Component } from './mvc/vistas/pagina404/pagina404.component';
import { ListAutoresComponent } from './mvc/vistas/admin/Autores/list-autores/list-autores.component';
import { ListCategoriasComponent } from './mvc/vistas/admin/Categorias/list-categorias/list-categorias.component';
import { ListEditorialesComponent } from './mvc/vistas/admin/Editoriales/list-editoriales/list-editoriales.component';
import { ListLibrosComponent } from './mvc/vistas/admin/Libros/list-libros/list-libros.component';
import { ListPaisesComponent } from './mvc/vistas/admin/Paises/list-paises/list-paises.component';
import { ListPrestamosComponent } from './mvc/vistas/admin/Prestamos/list-prestamos/list-prestamos.component';
import { ListUsuariosComponent } from './mvc/vistas/admin/Usuarios/list-usuarios/list-usuarios.component';
//Creamos la rutas
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'Autores', component:ListAutoresComponent},
  {path: 'Categorias', component:ListCategoriasComponent},
  {path: 'Editoriales', component:ListEditorialesComponent},
  {path: 'Libros', component:ListLibrosComponent},
  {path: 'Paises', component:ListPaisesComponent},
  {path: 'Prestamos', component:ListPrestamosComponent},
  {path: 'Usuarios',  component: ListUsuariosComponent},
  {path: 'book/:id',component: DetallesBookComponent},
  {path: 'admin/list-book', component:ListBookComponent},//TODO: only user auth.
  {path: 'user/login', component: LoginComponent},
  {path: 'user/registros', component: RegistrosComponent},
  {path: 'user/profile', component: ProfileComponent},//TODO: only user auth.
  {path: '**',component: Pagina404Component},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }