import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { EditorialesInterface } from "../Modelos/editoriales";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControladorEditorialesService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { 
    this.editorialesCollection = angularFirestore.collection<EditorialesInterface>('Editoriales');
    this.editoriales = this.editorialesCollection.valueChanges();
  }
  private editorialesCollection: AngularFirestoreCollection<EditorialesInterface>;
  private editoriales: Observable<EditorialesInterface[]>;
  private editorialDoc: AngularFirestoreDocument<EditorialesInterface>;
  private editorial: Observable<EditorialesInterface>;
  //Prop. Modal
  public selectEditoriales: EditorialesInterface = { ID_Editorial: null };
  
  getAllEditoriales() {
    return this.editoriales = this.editorialesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as  EditorialesInterface;
          data.ID_Editorial = action.payload.doc.id;
          return data;
        });
      }));
  }

  addEditoriales(editorial:  EditorialesInterface): void {
    this.editorialesCollection.add(editorial);
  }


  deleteEditoriales(ID_Editorial: string): void {
    this.editorialDoc = this.angularFirestore.doc< EditorialesInterface>(`Editoriales/${ID_Editorial}`);
    this.editorialDoc.delete();
  }
}
