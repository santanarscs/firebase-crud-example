import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-prestador-servico-dialog',
  templateUrl: './prestador-servico-dialog.component.html',
  styleUrls: ['./prestador-servico-dialog.component.scss']
})
export class PrestadorServicoDialogComponent implements OnInit {

  public msg: string;
  public item: string;
  constructor(public dialogRef: MatDialogRef<PrestadorServicoDialogComponent>) { }

  ngOnInit() {
  }

}
