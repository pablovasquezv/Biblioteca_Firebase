import { TestBed } from '@angular/core/testing';

import { ControladorAuthService } from './controlador-auth.service';

describe('ControladorAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorAuthService = TestBed.get(ControladorAuthService);
    expect(service).toBeTruthy();
  });
});
