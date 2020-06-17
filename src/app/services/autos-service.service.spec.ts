import { TestBed } from '@angular/core/testing';

import { AutosServiceService } from './autos-service.service';

describe('AutosServiceService', () => {
  let service: AutosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
