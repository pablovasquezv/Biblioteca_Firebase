import { TestBed } from '@angular/core/testing';

import { ControladorCategoriasService } from './controlador-categorias.service';

describe('ControladorCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorCategoriasService = TestBed.get(ControladorCategoriasService);
    expect(service).toBeTruthy();
  });
});
