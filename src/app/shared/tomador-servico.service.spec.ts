import { TestBed } from '@angular/core/testing';

import { TomadorServicoService } from './tomador-servico.service';

describe('TomadorServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TomadorServicoService = TestBed.get(TomadorServicoService);
    expect(service).toBeTruthy();
  });
});
