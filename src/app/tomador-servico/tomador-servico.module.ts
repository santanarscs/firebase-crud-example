import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomadorServicoListComponent } from './tomador-servico-list/tomador-servico-list.component';
import { TomadorServicoFormComponent } from './tomador-servico-form/tomador-servico-form.component';
import { TomadorServicoEditComponent } from './tomador-servico-edit/tomador-servico-edit.component';
import { TomadorServicoNewComponent } from './tomador-servico-new/tomador-servico-new.component';
import { TomadorServicoDialogComponent } from './tomador-servico-dialog/tomador-servico-dialog.component';
import { MatCardModule, MatFormFieldModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TomadorServicoListComponent, TomadorServicoFormComponent, TomadorServicoEditComponent, TomadorServicoNewComponent, TomadorServicoDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [TomadorServicoListComponent, TomadorServicoFormComponent, TomadorServicoEditComponent, TomadorServicoNewComponent],
  entryComponents: [TomadorServicoDialogComponent]
})
export class TomadorServicoModule { }
