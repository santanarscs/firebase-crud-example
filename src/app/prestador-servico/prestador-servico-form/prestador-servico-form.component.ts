import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PrestadorServico } from '../prestador-servico';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prestador-servico-form',
  templateUrl: './prestador-servico-form.component.html',
  styleUrls: ['./prestador-servico-form.component.scss']
})
export class PrestadorServicoFormComponent implements OnInit, OnChanges {

  @Input() prestador: PrestadorServico = {
    id: undefined,
    cnpj: '',
    razaoSocial: ''
  };
  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      // 'id': [''],
      'cnpj': [this.prestador.cnpj],
      'razaoSocial': [this.prestador.razaoSocial]
    });
  }

  ngOnChanges() {
    if (this.prestador) {
      this.formulario.addControl('id', this.fb.control(this.prestador.id, ));
      this.formulario.patchValue({ ...this.prestador });
    }
  }

  ngOnInit() {

  }

  sendSubmit() {
    if (this.formulario.valid) {
      this.create.emit(this.formulario.value);
    }
  }
}
