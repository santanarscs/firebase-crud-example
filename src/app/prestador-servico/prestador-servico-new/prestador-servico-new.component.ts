import { Component, OnInit } from '@angular/core';
import { PrestadorServicoService } from '../../shared/prestador-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestador-servico-new',
  templateUrl: './prestador-servico-new.component.html',
  styleUrls: ['./prestador-servico-new.component.scss']
})
export class PrestadorServicoNewComponent implements OnInit {

  prestador = {cnpj: '', razaoSocial: '' };
  constructor(private service: PrestadorServicoService, private router: Router) { }

  ngOnInit() {
  }
  saveData() {
    this.service.insert(this.prestador).then(res => this.router.navigate(['/']));
  }
}
