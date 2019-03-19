import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateBack() {
    this.router.navigate(['/usuarios']);
  }

}
