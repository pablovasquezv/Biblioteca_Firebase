import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { AutoresInterface } from "../Modelos/autores";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControladorAutoresService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.autoresCollection = angularFirestore.collection<AutoresInterface>('Autores');
    this.autores = this.autoresCollection.valueChanges();
  }
  private autoresCollection: AngularFirestoreCollection<AutoresInterface>;
  private autores: Observable<AutoresInterface[]>;
  private autorDoc: AngularFirestoreDocument<AutoresInterface>;
  private autor: Observable<AutoresInterface>;
  //Prop. Modal
  public selectAutores: AutoresInterface = { ID_Autor: null };
  getAllAutores() {
    return this.autores = this.autoresCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as AutoresInterface;
          data.ID_Autor = action.payload.doc.id;
          return data;
        });
      }));
  }

  addAutores(autores: AutoresInterface): void {
    this.autoresCollection.add(autores);
  }

  updateAutores(autor: AutoresInterface): void {
    let ID_Autor = autor.ID_Autor;
    this.autorDoc = this.angularFirestore.doc<AutoresInterface>(`Autores/${ID_Autor}`);
    this.autorDoc.update(autor);
  }

  deleteAutores(ID_Autor: string): void {
    this.autorDoc = this.angularFirestore.doc<AutoresInterface>(`Autores/${ID_Autor}`);
    this.autorDoc.delete();
  }
}
