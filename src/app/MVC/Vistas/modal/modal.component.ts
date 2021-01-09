import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { BooksInterface } from "../../Modelos/books";
import { ControladorDataApiService } from "../../Controladores/controlador-data-api.service";

//Formulario Activo
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      id: new FormControl (),
      Titulo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      Idioma: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      Precio: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      Autor: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      Oferta: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      Portada: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(160)]),
      Link_Amazon: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(260)]),
      Descripcion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(160)]),
    })
  }

  //Creamo la propieda de control de l formulario
  formBook: FormGroup;

  //Lista de Libros
  usuariosList: BooksInterface[];
  //Boton que cierra el modal
  @ViewChild('btnClose', { static: true })
  btnClose: ElementRef;

  //capturamos el id del usario que inicio la sesión
  @Input() userUid: string;

  constructor(
    private controladorDataApiService: ControladorDataApiService
  ) {
    //Creamo la instacon del formulario
    this.formBook = this.createFormGroup();
  }

  ngOnInit() {
  }
  
  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSaveBook(){
    //Validamos el formulario
    if (this.formBook.valid) {
        //Guardamos el libro llamado al 
        this.controladorDataApiService.addBook(this.formBook.value);
        alert("Guardado Correctamente!");
      //Limpiamos el Formulario
      this.onReserForm();
      //Cerramos el modal
      this.btnClose.nativeElement.click();
    }else{
      alert("Debe ingresar los campos requiridos");
    }
  }

  //Limpieza de formulario
 onReserForm() {
    this.formBook.reset();
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get id(){ return this.formBook.get('id');}
  get Titulo(){ return this.formBook.get('Titulo');}
  get Idioma(){ return this.formBook.get('Idioma');}
  get Precio(){ return this.formBook.get('Precio');}
  get Autor(){ return this.formBook.get('Autor');}
  get Oferta(){ return this.formBook.get('Oferta');}
  get Portada(){ return this.formBook.get('Portada');}
  get Link_Amazon(){ return this.formBook.get('Link_Amazon');}
  get Descripcion(){ return this.formBook.get('Descripcion');}
  
}
