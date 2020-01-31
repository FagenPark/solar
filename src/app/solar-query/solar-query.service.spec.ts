import { TestBed } from '@angular/core/testing';

import { SolarQueryService } from './solar-query.service';

describe('SolarQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolarQueryService = TestBed.get(SolarQueryService);
    expect(service).toBeTruthy();
  });
});
