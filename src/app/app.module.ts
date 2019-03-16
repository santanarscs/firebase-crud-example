import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { PrestadorServicoModule } from './prestador-servico/prestador-servico.module';
import { LoginComponent } from './auth/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    PrestadorServicoModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
