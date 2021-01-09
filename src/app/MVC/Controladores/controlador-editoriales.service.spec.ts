import { TestBed } from '@angular/core/testing';

import { ControladorEditorialesService } from './controlador-editoriales.service';

describe('ControladorEditorialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorEditorialesService = TestBed.get(ControladorEditorialesService);
    expect(service).toBeTruthy();
  });
});
