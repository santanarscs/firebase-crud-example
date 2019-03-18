import { Component, OnInit } from '@angular/core';
import { TomadorServicoService } from 'src/app/shared/tomador-servico.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { TomadorServicoDialogComponent } from '../tomador-servico-dialog/tomador-servico-dialog.component';

@Component({
  selector: 'app-tomador-servico-list',
  templateUrl: './tomador-servico-list.component.html',
  styleUrls: ['./tomador-servico-list.component.scss']
})
export class TomadorServicoListComponent implements OnInit {

  tomadores$: Observable<any>;
  constructor(private service: TomadorServicoService,
    private route: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.tomadores$ = this.service.getAll();
  }

  navigateNew() {
    this.route.navigate(['/tomadores/new'])

  }
  navigateEdit(id) {
    this.route.navigate(['/tomadores', id])

  }
  remove(key) {
    let dialogRef: MatDialogRef<TomadorServicoDialogComponent>;
    dialogRef = this.dialog.open(TomadorServicoDialogComponent);
    dialogRef.componentInstance.msg = 'Deseja remover este item?';
    dialogRef.componentInstance.item = key;
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.service.remove(res);
        this.snackBar.open('Item Removido com Sucesso!', 'OK', {
          duration: 2000,
        });
      }
    });
  }

}
