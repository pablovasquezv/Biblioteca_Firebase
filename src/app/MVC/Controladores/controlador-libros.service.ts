import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { LibrosInterface } from "../Modelos/libros";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControladorLibrosService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.librosCollection = angularFirestore.collection<LibrosInterface>('Libros');
    this.libros = this.librosCollection.valueChanges();
  }

  private librosCollection: AngularFirestoreCollection<LibrosInterface>;
  private libros: Observable<LibrosInterface[]>;
  private libroDoc: AngularFirestoreDocument<LibrosInterface>;
  private libro: Observable<LibrosInterface>;
  //Prop. Modal
  public selectLibros: LibrosInterface = { ID_Libro: null };

  getAllLibros() {
    return this.libros = this.librosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as LibrosInterface;
          data.ID_Libro = action.payload.doc.id;
          return data;
        });
      }));
  }

  addLibros(libros: LibrosInterface): void {
    this.librosCollection.add(libros);
  }

  updateLibros(libros: LibrosInterface): void {
    let ID_Libro = libros.ID_Libro;
    this.libroDoc = this.angularFirestore.doc<LibrosInterface>(`Libros/${ID_Libro}`);
    this.libroDoc.update(libros);
  }

  deleteLibros(ID_Libro: string): void {
    this.libroDoc = this.angularFirestore.doc<LibrosInterface>(`Libros/${ID_Libro}`);
    this.libroDoc.delete();
  }

}
