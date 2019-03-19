import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  insert(data) {
    let valueSubmit = Object.assign({}, data);
    this.afAuth.auth
      .createUserWithEmailAndPassword(valueSubmit.email, valueSubmit.password)
      .then(res => {
        valueSubmit = Object.assign(valueSubmit, {
          user_id: res.user.uid,
        });
        delete valueSubmit.password;
        this.service.insert(valueSubmit).then(() => {
          this.snackBar.open('Usuário Salvo com sucesso!', 'OK', {
            duration: 2000
          });
          this.router.navigate(['/usuarios/']);
        });
      });
  }
  navigateBack() {
    this.router.navigate(['/usuarios']);
  }
}
