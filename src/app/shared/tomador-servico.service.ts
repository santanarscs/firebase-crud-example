import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TomadorServicoService {

  constructor(private db: AngularFirestore) { }

  getAll() {
    return this.db.collection('fornecedores').snapshotChanges()
    .pipe(
      map(res => res.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  insert(data) {
    return this.db.collection('fornecedores').add(data);
  }
  update(key, data) {
    return this.db.doc(`fornecedores/${key}`).update(data);
  }
  remove(key) {
    return this.db.doc(`fornecedores/${key}`).delete();
  }
  getById(key) {
    return this.db.doc(`fornecedores/${key}`).snapshotChanges()
      .pipe(
        map(res => {
          const data = res.payload.data();
          const id = res.payload.id;
          return {id, ...data};
        })
      );
  }
}
