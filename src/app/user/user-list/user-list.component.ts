import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<any>;
  constructor(
    private service: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.users$ = this.service.getAll();
  }

  navigateNew() {
    this.router.navigate(['/usuarios/new']);
  }
}
