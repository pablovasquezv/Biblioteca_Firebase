import { TestBed } from '@angular/core/testing';

import { ControladorLibrosService } from './controlador-libros.service';

describe('ControladorLibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorLibrosService = TestBed.get(ControladorLibrosService);
    expect(service).toBeTruthy();
  });
});
