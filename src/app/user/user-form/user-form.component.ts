import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TomadorServicoService } from 'src/app/shared/tomador-servico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  @Input() user = {
    email: '',
    nome: '',
    password: '',
    tomador: '',
    permissao: [],
    user_id: ''
  };
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  formulario: FormGroup;
  tomadores$: Observable<any>;
  constructor(private fb: FormBuilder, private tomadorService: TomadorServicoService) { 
    
    this.formulario = this.fb.group({
      'nome': [this.user.nome],
      'email': [this.user.email],
      'password': [''],
      'permissao': [this.user.permissao],
      'tomador': [this.user.tomador],
      'user_id': [this.user.user_id]
    });
  }

  ngOnChanges() {
    this.tomadores$ = this.tomadorService.getAll();

    if (this.user) {
      this.formulario.patchValue({ ...this.user });
    }

    
  }
  sendSubmit() {
    this.save.emit(this.formulario.value);
  }
}
