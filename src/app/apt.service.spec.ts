import { TestBed } from '@angular/core/testing';

import { AptService } from './apt.service';

describe('AptService', () => {
  let service: AptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
