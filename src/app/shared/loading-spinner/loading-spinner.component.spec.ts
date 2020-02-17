import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import * as fromRoot from '../../state/app.state';
import {MemoizedSelector, Store} from '@ngrx/store';
import * as fromSolarQuery from '../../solar-query/state';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;
  let mockStore: MockStore<fromRoot.State>;
  let mockIsQuerying: MemoizedSelector<fromRoot.State, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponent, provideMockStore() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockIsQuerying = mockStore.overrideSelector(fromSolarQuery.getQueryingStatus, false);
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
