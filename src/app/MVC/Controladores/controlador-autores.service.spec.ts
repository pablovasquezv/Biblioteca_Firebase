import { TestBed } from '@angular/core/testing';

import { ControladorAutoresService } from './controlador-autores.service';

describe('ControladorAutoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorAutoresService = TestBed.get(ControladorAutoresService);
    expect(service).toBeTruthy();
  });
});
