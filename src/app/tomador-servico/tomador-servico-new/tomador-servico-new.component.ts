import { Component, OnInit } from '@angular/core';
import { TomadorServicoService } from 'src/app/shared/tomador-servico.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tomador-servico-new',
  templateUrl: './tomador-servico-new.component.html',
  styleUrls: ['./tomador-servico-new.component.scss']
})
export class TomadorServicoNewComponent implements OnInit {

  constructor(
    private service: TomadorServicoService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }
  saveData(event) {
    this.service.insert(event).then(res => {
      this.router.navigate(['/tomadores']);
      this.snackBar.open('Item adicionado com sucesso', 'OK', {
        duration: 2000
      });
    });
  }
  navigateBack() {
    this.router.navigate(['/tomadores']);
  }

}
