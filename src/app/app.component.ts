import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant-firebase';
  data: any;
  prestador = {id: '', cnpj: '', razaoSocial: ''};

  constructor(private db: AngularFirestore) {
    db.collection('prestadores').snapshotChanges()
      .pipe(
        map(res => res.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      )
      .subscribe(res => this.data = res);
  }
  onSubmit() {
    if (this.prestador.id) {
      this.db.doc(`prestadores/${this.prestador.id}`).update(this.prestador);
    } else {
      this.db.collection('prestadores').add(this.prestador);
    }
  }
  remove(key: string) {
    this.db.doc(`prestadores/${key}`).delete();
  }
  edit(data) {
    this.prestador.id = data.id;
    this.prestador.cnpj = data.cnpj;
    this.prestador.razaoSocial = data.razaoSocial;
  }
}
