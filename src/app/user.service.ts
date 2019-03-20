import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getAll() {
    return this.db.collection('users').snapshotChanges()
    .pipe(
      map(res => res.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getById(key) {
    return this.db.doc(`users/${key}`).snapshotChanges()
      .pipe(
        map(res => {
          const data = res.payload.data();
          const id = res.payload.id;
          return {id, ...data};
        })
      );
  }
  insert(data) {
    return this.db.collection('users').add(data);
  }
  update(data) {
    return this.db.doc(`users/${data.id}`).update(data);
  }
}
