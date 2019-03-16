import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoDetailComponent } from './prestador-servico-detail.component';

describe('PrestadorServicoDetailComponent', () => {
  let component: PrestadorServicoDetailComponent;
  let fixture: ComponentFixture<PrestadorServicoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorServicoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorServicoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
