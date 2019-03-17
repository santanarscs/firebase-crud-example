import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestadorServicoListComponent } from './prestador-servico-list/prestador-servico-list.component';
import { PrestadorServicoEditComponent } from './prestador-servico-edit/prestador-servico-edit.component';
import { PrestadorServicoDetailComponent } from './prestador-servico-detail/prestador-servico-detail.component';
import { MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import { PrestadorServicoNewComponent } from './prestador-servico-new/prestador-servico-new.component';
import { PrestadorServicoFormComponent } from './prestador-servico-form/prestador-servico-form.component';
import { PrestadorServicoDialogComponent } from './prestador-servico-dialog/prestador-servico-dialog.component';
@NgModule({
  declarations: [
    PrestadorServicoListComponent,
    PrestadorServicoEditComponent,
    PrestadorServicoDetailComponent,
    PrestadorServicoNewComponent,
    PrestadorServicoFormComponent,
    PrestadorServicoDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    PrestadorServicoListComponent,
    PrestadorServicoEditComponent,
    PrestadorServicoDetailComponent,
    PrestadorServicoNewComponent,
    PrestadorServicoFormComponent
  ],
  entryComponents: [PrestadorServicoDialogComponent]
})
export class PrestadorServicoModule { }
