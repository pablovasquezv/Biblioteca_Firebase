import { TestBed } from '@angular/core/testing';

import { ControladorPaisesService } from './controlador-paises.service';

describe('ControladorPaisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorPaisesService = TestBed.get(ControladorPaisesService);
    expect(service).toBeTruthy();
  });
});
