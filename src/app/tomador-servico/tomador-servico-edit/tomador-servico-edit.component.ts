import { Component, OnInit } from '@angular/core';
import { TomadorServico } from '../tomador-servico';
import { TomadorServicoService } from 'src/app/shared/tomador-servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tomador-servico-edit',
  templateUrl: './tomador-servico-edit.component.html',
  styleUrls: ['./tomador-servico-edit.component.scss']
})
export class TomadorServicoEditComponent implements OnInit {

  tomador: TomadorServico;
  constructor(
    private service: TomadorServicoService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.service.getById(this.route.snapshot.params['id'])
      .subscribe((res: TomadorServico) => this.tomador = res);
  }

  updateData(event) {
    this.service.update(this.route.snapshot.params['id'], event).then(res => {
      this.router.navigate(['/tomadores']);
      this.snackBar.open('Item editado com sucesso', 'OK', {
        duration: 2000
      });
    });
  }
  navigateBack() {
    this.router.navigate(['/tomadores']);
  }
}
