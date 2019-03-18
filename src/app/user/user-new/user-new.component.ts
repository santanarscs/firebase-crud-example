import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      'nome': [''],
      'email': [''],
      'password': [''],
      'permissao': ['']
    });
  }
  sendSubmit() {
    console.log(this.formulario.value);
  }
}
