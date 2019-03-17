import { Component, OnInit } from '@angular/core';
import { PrestadorServicoService } from '../../shared/prestador-servico.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { PrestadorServicoDialogComponent } from '../prestador-servico-dialog/prestador-servico-dialog.component';

@Component({
  selector: 'app-prestador-servico-list',
  templateUrl: './prestador-servico-list.component.html',
  styleUrls: ['./prestador-servico-list.component.scss']
})
export class PrestadorServicoListComponent implements OnInit {

  data: Observable<any>;

  constructor(
    private router: Router,
    private service: PrestadorServicoService,
    private dialog: MatDialog,
    private snakBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.data = this.service.getAll();
  }
  navigateNew() {
    this.router.navigate(['prestadores/new']);
  }
  navigateEdit(key) {
    this.router.navigate(['prestadores/new', key]);
  }
  remove(key) {
    let dialogRef: MatDialogRef<PrestadorServicoDialogComponent>;
    dialogRef = this.dialog.open(PrestadorServicoDialogComponent);
    dialogRef.componentInstance.msg = 'Deseja remover este item?';
    dialogRef.componentInstance.item = key;
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.service.remove(res);
        this.snakBar.open('Item Removido com Sucesso!', 'OK', {
          duration: 2000,
        });
      }
    });
  }
}
