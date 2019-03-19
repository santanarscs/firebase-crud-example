import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user = {
    email: '',
    nome: '',
    password: '',
    permissoes: [],
    user_id: ''
  };
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  formulario: FormGroup;
  constructor(private fb: FormBuilder) { }

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
    this.save.emit(this.formulario.value);
  }
}
