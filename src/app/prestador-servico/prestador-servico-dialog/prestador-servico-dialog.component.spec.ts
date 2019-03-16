import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoDialogComponent } from './prestador-servico-dialog.component';

describe('PrestadorServicoDialogComponent', () => {
  let component: PrestadorServicoDialogComponent;
  let fixture: ComponentFixture<PrestadorServicoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorServicoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorServicoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
