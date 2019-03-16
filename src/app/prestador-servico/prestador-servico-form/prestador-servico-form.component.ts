import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrestadorServico } from '../prestador-servico';

@Component({
  selector: 'app-prestador-servico-form',
  templateUrl: './prestador-servico-form.component.html',
  styleUrls: ['./prestador-servico-form.component.scss']
})
export class PrestadorServicoFormComponent {

  @Input() prestador: PrestadorServico;
  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  sendSubmit() {
    this.create.emit(this.prestador);
  }
}
