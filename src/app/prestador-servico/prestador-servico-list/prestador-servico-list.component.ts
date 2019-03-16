import { Component, OnInit } from '@angular/core';
import { PrestadorServicoService } from '../../shared/prestador-servico.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestador-servico-list',
  templateUrl: './prestador-servico-list.component.html',
  styleUrls: ['./prestador-servico-list.component.scss']
})
export class PrestadorServicoListComponent implements OnInit {

  data: Observable<any>;
  constructor(
    private router: Router,
    private service: PrestadorServicoService) { }

  ngOnInit() {
    this.data = this.service.getAll();
  }
  navigateNew() {
    this.router.navigate(['/new']);
  }
  navigateEdit(key) {
    this.router.navigate(['/new', key]);
  }
  remove(key) {
    this.service.remove(key);
  }
}
