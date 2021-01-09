import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { PrestamosInterface } from "../Modelos/prestamos";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControladorPrestamosService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { 
    this.prestamosCollection = angularFirestore.collection<PrestamosInterface>('Prestamos');
    this.prestamos = this.prestamosCollection.valueChanges();
  }
  private prestamosCollection: AngularFirestoreCollection<PrestamosInterface>;
  private prestamos: Observable<PrestamosInterface[]>;
  private prestamoDoc: AngularFirestoreDocument<PrestamosInterface>;
  private prestamo: Observable<PrestamosInterface>;
  //Prop. Modal
  public selectPrestamos: PrestamosInterface = { ID_Prestamo: null };

  getAllPrestamos() {
    return this.prestamos = this.prestamosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PrestamosInterface;
          data.ID_Prestamo = action.payload.doc.id;
          return data;
        });
      }));
  }

  addPrestamos(prestamos: PrestamosInterface): void {
    this.prestamosCollection.add(prestamos);
  }

  updatePrestamos(prestamos: PrestamosInterface): void {
    let ID_Prestamo = prestamos.ID_Prestamo;
    this.prestamoDoc = this.angularFirestore.doc<PrestamosInterface>(`Prestamos/${ID_Prestamo}`);
    this.prestamoDoc.update(prestamos);
  }
  
  deletePrestamos(ID_Prestamo: string): void {
    this.prestamoDoc = this.angularFirestore.doc<PrestamosInterface>(`Prestamos/${ID_Prestamo}`);
    this.prestamoDoc.delete();
  }

}
