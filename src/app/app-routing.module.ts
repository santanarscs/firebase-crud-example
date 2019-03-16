import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestadorServicoListComponent } from './prestador-servico/prestador-servico-list/prestador-servico-list.component';
import { PrestadorServicoEditComponent } from './prestador-servico/prestador-servico-edit/prestador-servico-edit.component';
import { PrestadorServicoDetailComponent } from './prestador-servico/prestador-servico-detail/prestador-servico-detail.component';

const routes: Routes = [
  {path: '', component: PrestadorServicoListComponent},
  {path: 'new/:id', component: PrestadorServicoEditComponent},
  {path: ':id/detail', component: PrestadorServicoDetailComponent},
  {path: 'new', component: PrestadorServicoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
