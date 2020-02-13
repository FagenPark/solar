import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SolarQueryComponent} from './solar-query.component';
import {SolarQueryFormComponent} from './solar-query-form/solar-query-form.component';
import {SolarQueryInstallerComponent} from './solar-query-installer/solar-query-installer.component';
import {SolarQueryResultsComponent} from './solar-query-results/solar-query-results.component';
import {SharedModule} from '../shared/shared.module';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import * as fromRoot from 'src/app/state/app.state';

import * as fromSolarQuery from './state/';
import {MemoizedSelector, Store} from '@ngrx/store';

describe('SolarQueryComponent', () => {
  let component: SolarQueryComponent;
  let fixture: ComponentFixture<SolarQueryComponent>;
  let mockStore: MockStore<fromRoot.State>;
  let mockHasResultsSelector: MemoizedSelector<fromRoot.State, boolean>;
  let mockErrorMessageSelector: MemoizedSelector<fromRoot.State, string>;
  let mockIsModalOpen: MemoizedSelector<fromRoot.State, boolean>;
  let mockPostcode: MemoizedSelector<fromRoot.State, number>;
  let mockNumberOfPeople: MemoizedSelector<fromRoot.State, string>;
  let mockModalContentId: MemoizedSelector<fromRoot.State, string>;
  let mockStateName: MemoizedSelector<fromRoot.State, string>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [provideMockStore()],
      declarations: [ SolarQueryComponent, SolarQueryFormComponent, SolarQueryInstallerComponent, SolarQueryResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockHasResultsSelector = mockStore.overrideSelector(fromSolarQuery.getHasResults, false);
    mockErrorMessageSelector = mockStore.overrideSelector(fromSolarQuery.getErrormessage, 'dd');
    mockIsModalOpen = mockStore.overrideSelector(fromSolarQuery.getModalStatus, false);
    mockPostcode = mockStore.overrideSelector(fromSolarQuery.getPostCode, 2055);
    mockNumberOfPeople = mockStore.overrideSelector(fromSolarQuery.getNumberOfPeople, '4');
    mockModalContentId = mockStore.overrideSelector(fromSolarQuery.getModalContentId, 're3');
    mockStateName = mockStore.overrideSelector(fromSolarQuery.getStateName, 'NSW');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
