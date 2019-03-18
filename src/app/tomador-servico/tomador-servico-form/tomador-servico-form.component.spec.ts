import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadorServicoFormComponent } from './tomador-servico-form.component';

describe('TomadorServicoFormComponent', () => {
  let component: TomadorServicoFormComponent;
  let fixture: ComponentFixture<TomadorServicoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadorServicoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadorServicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
