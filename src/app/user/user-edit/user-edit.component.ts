import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  usuario: any;
  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.service.getById(this.route.snapshot.params['id'])
      .subscribe((res: any) => this.usuario = res);
  }

  updateData(event) {
    this.service.update(event).then(res => {
      this.router.navigate(['/usuarios']);
      this.snackBar.open('Item editado com sucesso', 'OK', {
        duration: 2000
      });
    });
  }
  navigateBack() {
    this.router.navigate(['/usuarios']);
  }

}
