import { TestBed } from '@angular/core/testing';

import { VolunteerMissionService } from './volunteer-mission.service';

describe('VolunteerMissionService', () => {
  let service: VolunteerMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
