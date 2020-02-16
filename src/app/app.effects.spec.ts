import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import {HttpClientModule} from '@angular/common/http';
import {provideMockStore} from '@ngrx/store/testing';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });

    effects = TestBed.get<AppEffects>(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
