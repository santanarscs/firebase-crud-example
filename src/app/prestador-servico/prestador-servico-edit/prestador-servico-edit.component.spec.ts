import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoEditComponent } from './prestador-servico-edit.component';

describe('PrestadorServicoEditComponent', () => {
  let component: PrestadorServicoEditComponent;
  let fixture: ComponentFixture<PrestadorServicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorServicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorServicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
