import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { CategoriasInterface } from "../Modelos/categorias";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControladorCategoriasService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.categoriasCollection = angularFirestore.collection<CategoriasInterface>('Categorias');
    this.categorias = this.categoriasCollection.valueChanges();
  }
  private categoriasCollection: AngularFirestoreCollection<CategoriasInterface>;
  private categorias: Observable<CategoriasInterface[]>;
  private categoriaDoc: AngularFirestoreDocument<CategoriasInterface>;
  private categoria: Observable<CategoriasInterface>;
  //Prop. Modal
  public selectCategorias: CategoriasInterface = { ID_Categoria: null };


  getAllCategorias() {
    return this.categorias = this.categoriasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CategoriasInterface;
          data.ID_Categoria = action.payload.doc.id;
          return data;
        });
      }));
  }

  addCategorias(categoria: CategoriasInterface): void {
    this.categoriasCollection.add(categoria);
  }


  deleteCategorias(ID_Categoria: string): void {
    this.categoriaDoc = this.angularFirestore.doc<CategoriasInterface>(`Categorias/${ID_Categoria}`);
    this.categoriaDoc.delete();
  }
}
