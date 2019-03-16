import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestadorServicoListComponent } from './prestador-servico/prestador-servico-list/prestador-servico-list.component';
import { PrestadorServicoEditComponent } from './prestador-servico/prestador-servico-edit/prestador-servico-edit.component';
import { PrestadorServicoDetailComponent } from './prestador-servico/prestador-servico-detail/prestador-servico-detail.component';
import { PrestadorServicoNewComponent } from './prestador-servico/prestador-servico-new/prestador-servico-new.component';
import { LoginComponent } from './auth/login/login.component';
import {AdminGuard } from './admin.guard';
const routes: Routes = [
  {path: '', component: PrestadorServicoListComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'new/:id', component: PrestadorServicoEditComponent, canActivate: [AdminGuard]},
  {path: ':id/detail', component: PrestadorServicoDetailComponent, canActivate: [AdminGuard]},
  {path: 'new', component: PrestadorServicoNewComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
