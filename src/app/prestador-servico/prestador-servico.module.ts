import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestadorServicoListComponent } from './prestador-servico-list/prestador-servico-list.component';
import { PrestadorServicoEditComponent } from './prestador-servico-edit/prestador-servico-edit.component';
import { PrestadorServicoDetailComponent } from './prestador-servico-detail/prestador-servico-detail.component';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PrestadorServicoNewComponent } from './prestador-servico-new/prestador-servico-new.component';
import { PrestadorServicoFormComponent } from './prestador-servico-form/prestador-servico-form.component';
@NgModule({
  declarations: [
    PrestadorServicoListComponent,
    PrestadorServicoEditComponent,
    PrestadorServicoDetailComponent,
    PrestadorServicoNewComponent,
    PrestadorServicoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    PrestadorServicoListComponent,
    PrestadorServicoEditComponent,
    PrestadorServicoDetailComponent,
    PrestadorServicoNewComponent,
    PrestadorServicoFormComponent
  ]
})
export class PrestadorServicoModule { }
