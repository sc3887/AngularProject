import { TestBed } from '@angular/core/testing';

import { RegisterantService } from './registrant.service';

describe('RegistrantService', () => {
  let service: RegisterantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
