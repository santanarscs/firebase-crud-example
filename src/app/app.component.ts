import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant-firebase';
  constructor(private authService: AuthService) {
  }

  isLoggedin() {
    return this.authService.isLoggedIn;
  }
  logout() {
    this.authService.logout();
  }
}
