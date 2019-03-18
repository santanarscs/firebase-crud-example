import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadorServicoListComponent } from './tomador-servico-list.component';

describe('TomadorServicoListComponent', () => {
  let component: TomadorServicoListComponent;
  let fixture: ComponentFixture<TomadorServicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadorServicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadorServicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
