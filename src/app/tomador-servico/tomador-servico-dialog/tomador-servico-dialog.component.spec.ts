import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadorServicoDialogComponent } from './tomador-servico-dialog.component';

describe('TomadorServicoDialogComponent', () => {
  let component: TomadorServicoDialogComponent;
  let fixture: ComponentFixture<TomadorServicoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadorServicoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadorServicoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
