import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { PrestadorServico } from '../prestador-servico/prestador-servico';
@Injectable({
  providedIn: 'root'
})
export class PrestadorServicoService {

  constructor(private db: AngularFirestore) { }

  getAll() {
    return this.db.collection('prestadores').snapshotChanges()
    .pipe(
      map(res => res.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  insert(data: PrestadorServico) {
    return this.db.collection('prestadores').add(data);
  }
  update(data: PrestadorServico) {
    return this.db.doc(`prestadores/${data.id}`).update(data);
  }
  remove(key) {
    return this.db.doc(`prestadores/${key}`).delete();
  }
  getById(key) {
    return this.db.doc(`prestadores/${key}`).valueChanges();
  }
}
