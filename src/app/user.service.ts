import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
  getById() {

  }
  insert(data) {
    return this.db.collection('users').add(data);
  }
}
