
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestadorServicoService } from '../../shared/prestador-servico.service';
import { PrestadorServico } from '../prestador-servico';

@Component({
  selector: 'app-prestador-servico-edit',
  templateUrl: './prestador-servico-edit.component.html',
  styleUrls: ['./prestador-servico-edit.component.scss']
})
export class PrestadorServicoEditComponent implements OnInit {

  prestador = {
    id: '',
    cnpj: '',
    razaoSocial: ''
  };
  constructor(
    private service: PrestadorServicoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getById(this.route.snapshot.params['id'])
      .subscribe((res: PrestadorServico) => {
        this.prestador.id = res.id;
        this.prestador.cnpj = res.cnpj;
        this.prestador.razaoSocial = res.razaoSocial;
      });
  }

  update() {
    this.service.update(this.prestador).then(res => this.router.navigate(['/']));
  }
}
