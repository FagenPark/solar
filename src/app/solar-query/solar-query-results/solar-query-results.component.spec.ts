import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SolarQueryResultsComponent} from './solar-query-results.component';
import {ToolTipComponent} from '../../shared/tool-tip/tool-tip.component';
import {HttpClientModule} from '@angular/common/http';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {SolarQueryService} from '../solar-query.service';
import {MemoizedSelector, Store} from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromSolarQuery from '../state';

describe('SolarQueryResultsComponent', () => {
  let component: SolarQueryResultsComponent;
  let fixture: ComponentFixture<SolarQueryResultsComponent>;
  let mockStore: MockStore<fromRoot.State>;
  let mockIsQuerying: MemoizedSelector<fromRoot.State, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideMockStore(), SolarQueryService],
      declarations: [ SolarQueryResultsComponent, ToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryResultsComponent);
    component = fixture.componentInstance;
    component.numberOfPeople = '1';
    mockStore = TestBed.get(Store);
    mockIsQuerying = mockStore.overrideSelector(fromSolarQuery.getQueryingStatus, false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get 1 people in NSW', () => {
    component.stateName = 'NSW';
    expect(component.getEnergyUsage()).toBe('3,300 - 4,000');

  });
});
