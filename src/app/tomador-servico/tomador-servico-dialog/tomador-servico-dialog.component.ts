import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tomador-servico-dialog',
  templateUrl: './tomador-servico-dialog.component.html',
  styleUrls: ['./tomador-servico-dialog.component.scss']
})
export class TomadorServicoDialogComponent implements OnInit {

  public msg: string;
  public item: string;
  constructor(public dialogRef: MatDialogRef<TomadorServicoDialogComponent>) { }

  ngOnInit() {
  }

}
