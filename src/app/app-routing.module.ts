import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestadorServicoListComponent } from './prestador-servico/prestador-servico-list/prestador-servico-list.component';
import { PrestadorServicoEditComponent } from './prestador-servico/prestador-servico-edit/prestador-servico-edit.component';
import { PrestadorServicoNewComponent } from './prestador-servico/prestador-servico-new/prestador-servico-new.component';
import { LoginComponent } from './auth/login/login.component';
import {AdminGuard } from './admin.guard';
import { HomeComponent } from './home/home.component';
import { TomadorServicoListComponent } from './tomador-servico/tomador-servico-list/tomador-servico-list.component';
import { TomadorServicoEditComponent } from './tomador-servico/tomador-servico-edit/tomador-servico-edit.component';
import { TomadorServicoNewComponent } from './tomador-servico/tomador-servico-new/tomador-servico-new.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'prestadores', component: PrestadorServicoListComponent, canActivate: [AdminGuard]},
  { path: 'prestadores/new/:id', component: PrestadorServicoEditComponent, canActivate: [AdminGuard] },
  { path: 'prestadores/new', component: PrestadorServicoNewComponent, canActivate: [AdminGuard] },

  { path: 'tomadores', component: TomadorServicoListComponent, canActivate: [AdminGuard]},
  { path: 'tomadores/new/:id', component: TomadorServicoEditComponent, canActivate: [AdminGuard] },
  { path: 'tomadores/new', component: TomadorServicoNewComponent, canActivate: [AdminGuard] },
  { path: 'usuarios', component: UserListComponent, canActivate: [AdminGuard] },
  { path: 'usuarios/new', component: UserNewComponent, canActivate: [AdminGuard] },
  { path: 'usuarios/edit/:id', component: UserEditComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
