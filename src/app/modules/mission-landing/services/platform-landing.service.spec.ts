import { TestBed } from '@angular/core/testing';

import { PlatformLandingService } from './platform-landing.service';

describe('PlatformLandingService', () => {
  let service: PlatformLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
