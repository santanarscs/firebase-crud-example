import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadorServicoNewComponent } from './tomador-servico-new.component';

describe('TomadorServicoNewComponent', () => {
  let component: TomadorServicoNewComponent;
  let fixture: ComponentFixture<TomadorServicoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomadorServicoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomadorServicoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
