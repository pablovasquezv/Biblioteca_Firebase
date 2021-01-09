import { TestBed } from '@angular/core/testing';

import { ControladorUsuariosService } from './controlador-usuarios.service';

describe('ControladorUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorUsuariosService = TestBed.get(ControladorUsuariosService);
    expect(service).toBeTruthy();
  });
});
