import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorServicoNewComponent } from './prestador-servico-new.component';

describe('PrestadorServicoNewComponent', () => {
  let component: PrestadorServicoNewComponent;
  let fixture: ComponentFixture<PrestadorServicoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorServicoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorServicoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
