import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestadorServicoListComponent } from './prestador-servico/prestador-servico-list/prestador-servico-list.component';
import { PrestadorServicoEditComponent } from './prestador-servico/prestador-servico-edit/prestador-servico-edit.component';
import { PrestadorServicoDetailComponent } from './prestador-servico/prestador-servico-detail/prestador-servico-detail.component';
import { PrestadorServicoNewComponent } from './prestador-servico/prestador-servico-new/prestador-servico-new.component';
import { LoginComponent } from './auth/login/login.component';
import {AdminGuard } from './admin.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'prestadores', component: PrestadorServicoListComponent, canActivate: [AdminGuard]},
  { path: 'prestadores/new/:id', component: PrestadorServicoEditComponent, canActivate: [AdminGuard] },
  { path: 'prestadores/new', component: PrestadorServicoNewComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
