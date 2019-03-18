import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TomadorServico } from '../tomador-servico';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tomador-servico-form',
  templateUrl: './tomador-servico-form.component.html',
  styleUrls: ['./tomador-servico-form.component.scss']
})
export class TomadorServicoFormComponent implements OnChanges {

  @Input() tomador: TomadorServico = {
    id: undefined,
    cnpj: '',
    razaoSocial: ''
  };
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      'cnpj': [this.tomador.cnpj],
      'razaoSocial': [this.tomador.razaoSocial]
    });
  }

  ngOnChanges() {
    if (this.tomador) {
      // this.formulario.addControl('id', this.fb.control(this.prestador.id, ));
      this.formulario.patchValue({ ...this.tomador });
    }
  }

  sendSubmit() {
    if (this.formulario.valid) {
      this.save.emit(this.formulario.value);
    }
  }
}
