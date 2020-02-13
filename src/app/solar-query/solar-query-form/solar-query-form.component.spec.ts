import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SolarQueryFormComponent} from './solar-query-form.component';
import {SharedModule} from '../../shared/shared.module';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {MemoizedSelector, Store} from '@ngrx/store';
import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from '../state/';

describe('SolarQueryFormComponent', () => {
  let component: SolarQueryFormComponent;
  let fixture: ComponentFixture<SolarQueryFormComponent>;
  let mockStore: MockStore<fromRoot.State>;
  let mockHasResultsSelector: MemoizedSelector<fromRoot.State, boolean>;
  let mockErrormessageSelector: MemoizedSelector<fromRoot.State, string>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [provideMockStore()],
      declarations: [ SolarQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryFormComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockHasResultsSelector = mockStore.overrideSelector(fromSolarQuery.getHasResults, false);
    mockErrormessageSelector = mockStore.overrideSelector(fromSolarQuery.getErrormessage, '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
