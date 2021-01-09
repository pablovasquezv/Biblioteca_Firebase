import { TestBed } from '@angular/core/testing';

import { ControladorPrestamosService } from './controlador-prestamos.service';

describe('ControladorPrestamosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorPrestamosService = TestBed.get(ControladorPrestamosService);
    expect(service).toBeTruthy();
  });
});
