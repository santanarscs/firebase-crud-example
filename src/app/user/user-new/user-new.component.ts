import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  formulario: FormGroup;
  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      'nome': [''],
      'email': [''],
      'password': [''],
      'permissao': [''],
      'user_id': ['']
    });
  }
  sendSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
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
}
