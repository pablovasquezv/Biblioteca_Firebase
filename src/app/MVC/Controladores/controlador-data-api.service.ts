import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { BooksInterface } from "../Modelos/books";
import { Observable } from 'rxjs/internal/Observable';
import { snapshotChanges } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable({
  providedIn: 'root'
})
export class ControladorDataApiService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.booksCollection = angularFirestore.collection<BooksInterface>('Books');
    this.books = this.booksCollection.valueChanges();
  }
  private booksCollection: AngularFirestoreCollection<BooksInterface>;
  private books: Observable<BooksInterface[]>;
  private bookDoc: AngularFirestoreDocument<BooksInterface>;
  private book: Observable<BooksInterface>;
  //Prop. Modal
  public selectBook: BooksInterface = { id:null};

  getAllBooks() {
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BooksInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneBook(idBook: string) {
    this.bookDoc = this.angularFirestore.doc<BooksInterface>(`Books/${idBook}`);
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as BooksInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addBook(book: BooksInterface): void {
    this.booksCollection.add(book);
  }
  updateBook(book: BooksInterface): void {
    let idBook = book.id;
    this.bookDoc = this.angularFirestore.doc<BooksInterface>(`Books/${idBook}`);
    this.bookDoc.update(book);
  }
  deleteBook(idBook: string): void {
    this.bookDoc = this.angularFirestore.doc<BooksInterface>(`Books/${idBook}`);
    this.bookDoc.delete();
  }
}
