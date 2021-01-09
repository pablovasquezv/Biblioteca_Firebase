import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

//Controladores
import { ControladorLibrosService } from "../../../../Controladores/controlador-libros.service";
import { ControladorPrestamosService } from "../../../../Controladores/controlador-prestamos.service";
import { ControladorUsuariosService } from "../../../../Controladores/controlador-usuarios.service";

//Modelos
import { UsuariosInterface } from "../../../../Modelos/usuarios";
import { LibrosInterface } from "../../../../Modelos/libros";

//Formulario Activo
import { FormControl, FormGroup, Validators, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-modal-ingreso-prestamos',
  templateUrl: './modal-ingreso-prestamos.component.html',
  styleUrls: ['./modal-ingreso-prestamos.component.css']
})
export class ModalIngresoPrestamosComponent implements OnInit {
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Prestamo: new FormControl(),
      userUid: new FormControl(''),
      ID_Usuario_Prestamo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(140)]),
      ID_Libro_Prestamo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      Fecha_Prestamo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      Numero_Dias_Prestamo: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
     
    })
  }

  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoPrestamos: FormGroup;

  //Cierre de modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;
  //capturamos el id del usario que inicio la sesión
 // @Input() userUid: string;
  constructor(
    private controladorLibrosService: ControladorLibrosService,
    private controladorPrestamosService: ControladorPrestamosService,
    private controladorUsuariosService: ControladorUsuariosService
  ) {
    //Creamos las instancia con del formulario
    this.formularioIngresoPrestamos = this.createFormGroup();
  }
  //Filtro Búsqueda
  filtroUsuarios: '';

  //Variable de búsqueda
  filtroLibros: '';

  public listUsuarios: UsuariosInterface[] = [];
  public listLibros: LibrosInterface[] = [];

  ngOnInit() {
    this.getListLibros();
    this.getListUsuarios();
    //Limpiamos el formulario
    this.resetForm();

  }

  getListLibros() {
    this.controladorLibrosService.getAllLibros().subscribe(libros => {
      this.listLibros = libros;
    });
  }

  getListUsuarios() {
    this.controladorUsuariosService.getAllUsuarios().subscribe(usuarios => {
      this.listUsuarios = usuarios;
    });
  }

  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveIngresoPrestamos() {
    //new
    if (this.formularioIngresoPrestamos.valid) {
      //El id del usuario que guarda el libro y soló puede editarlo con la propiedad
      //formIngresoPrestamos.value.userUid = this.userUid;

      //Guardamos el libro
      this.controladorPrestamosService.addPrestamos(this.formularioIngresoPrestamos.value);
      alert("Guardado Correctamente!");
      //Limpiamos el Formulario
      this.onReserForm();
      //Cerramos el modal
      this.btnClose.nativeElement.click();
    } else {
      alert("Ingresar datos en todos los campos requeridos!!");
    }
  }
   //Limpieza de formulario
   onReserForm() {
    this.formularioIngresoPrestamos.reset();
  }

  resetForm(formIngresoPrestamos?: NgForm) {
    //Si el formulario tiene datos lo reiniciamos
    if (formIngresoPrestamos != null) {
      formIngresoPrestamos.reset();
    }
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Prestamo() { return this.formularioIngresoPrestamos.get('ID_Prestamo'); }
  get userUid() { return this.formularioIngresoPrestamos.get('userUid'); }
  get ID_Usuario_Prestamo() { return this.formularioIngresoPrestamos.get('ID_Usuario_Prestamo'); }
  get ID_Libro_Prestamo() { return this.formularioIngresoPrestamos.get('ID_Libro_Prestamo'); }
  get Fecha_Prestamo() { return this.formularioIngresoPrestamos.get('Fecha_Prestamo'); }
  get Numero_Dias_Prestamo() { return this.formularioIngresoPrestamos.get('Numero_Dias_Prestamo'); }
}
