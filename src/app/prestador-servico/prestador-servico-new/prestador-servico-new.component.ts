import { Component, OnInit } from '@angular/core';
import { PrestadorServicoService } from '../../shared/prestador-servico.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-prestador-servico-new',
  templateUrl: './prestador-servico-new.component.html',
  styleUrls: ['./prestador-servico-new.component.scss']
})
export class PrestadorServicoNewComponent implements OnInit {

  constructor(
    private service: PrestadorServicoService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }
  saveData(event) {
    this.service.insert(event).then(res => {
      this.router.navigate(['/']);
      this.snackBar.open('Item adicionado com sucesso', 'OK', {
        duration: 2000
      });
    });
  }
  navigateBack() {
    this.router.navigate(['/']);
  }
}
