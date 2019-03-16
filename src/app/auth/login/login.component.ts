import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {email: '', password: '' };
  test: any;
  constructor(private service: AuthService) { }

  ngOnInit() {
    this.test = JSON.parse(localStorage.getItem('user'));
  }

  onLogin() {
    this.service.login(this.user.email, this.user.password);
      // .then(res => console.log(res));
    console.log(this.user);
  }
}
