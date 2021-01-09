import { Component, OnInit } from '@angular/core';

import { ControladorDataApiService } from "../../Controladores/controlador-data-api.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private controladorDataApiService:ControladorDataApiService
  ) { }
  public listBooks= [];
  public book='';
  
  ngOnInit() {
    this.controladorDataApiService.getAllBooks().subscribe(books=>
      {
      console.log('BOOKS',books);
      this.listBooks = books;
    })
  }

}
