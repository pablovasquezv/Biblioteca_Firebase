import { Component, OnInit } from '@angular/core';
//Models
import { BooksInterface } from "../../Modelos/books";
//Controlers
import { ControladorDataApiService } from "../../Controladores/controlador-data-api.service";
//Rutas
import { ActivatedRoute, Params} from'@angular/router';

@Component({
  selector: 'app-detalles-book',
  templateUrl: './detalles-book.component.html',
  styleUrls: ['./detalles-book.component.css']
})
export class DetallesBookComponent implements OnInit {

  constructor(
    private controladorDataApiService:ControladorDataApiService,
    private activatedRoute: ActivatedRoute
  ) { }
  private book: BooksInterface= {};

  ngOnInit() {
     const idBook = this.activatedRoute.snapshot.params['id'];
     this.getDetails(idBook);
  }

  getDetails(idBook: string):void{
    this.controladorDataApiService.getOneBook(idBook).subscribe(book =>{
      this.book = book;
    })

  }
}
