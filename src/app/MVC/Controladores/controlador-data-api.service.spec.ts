import { TestBed } from '@angular/core/testing';

import { ControladorDataApiService } from './controlador-data-api.service';

describe('ControladorDataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorDataApiService = TestBed.get(ControladorDataApiService);
    expect(service).toBeTruthy();
  });
});
