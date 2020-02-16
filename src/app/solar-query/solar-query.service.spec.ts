import { TestBed } from '@angular/core/testing';

import { SolarQueryService } from './solar-query.service';
import {HttpClientModule} from '@angular/common/http';
import {provideMockStore} from '@ngrx/store/testing';

describe('SolarQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideMockStore()],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SolarQueryService = TestBed.get(SolarQueryService);
    expect(service).toBeTruthy();
  });
});
