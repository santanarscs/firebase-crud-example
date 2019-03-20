import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TomadorServicoService } from 'src/app/shared/tomador-servico.service';
import { Observable } from 'rxjs';

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
    tomador: '',
    permissoes: [],
    user_id: ''
  };
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  formulario: FormGroup;
  tomadores$: Observable<any>;
  constructor(private fb: FormBuilder, private tomadorService: TomadorServicoService) { }

  ngOnInit() {
    this.tomadores$ = this.tomadorService.getAll();

    this.formulario = this.fb.group({
      'nome': [''],
      'email': [''],
      'password': [''],
      'permissao': [''],
      'tomador': [''],
      'user_id': ['']
    });
  }
  sendSubmit() {
    this.save.emit(this.formulario.value);
  }
}
