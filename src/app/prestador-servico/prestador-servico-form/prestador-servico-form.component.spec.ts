import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoFormComponent } from './prestador-servico-form.component';

describe('PrestadorServicoFormComponent', () => {
  let component: PrestadorServicoFormComponent;
  let fixture: ComponentFixture<PrestadorServicoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorServicoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorServicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
