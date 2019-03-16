import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoListComponent } from './prestador-servico-list.component';

describe('PrestadorServicoListComponent', () => {
  let component: PrestadorServicoListComponent;
  let fixture: ComponentFixture<PrestadorServicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorServicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorServicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
