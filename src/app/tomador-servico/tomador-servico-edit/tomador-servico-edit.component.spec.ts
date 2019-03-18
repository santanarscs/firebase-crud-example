import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadorServicoEditComponent } from './tomador-servico-edit.component';

describe('TomadorServicoEditComponent', () => {
  let component: TomadorServicoEditComponent;
  let fixture: ComponentFixture<TomadorServicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadorServicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadorServicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
