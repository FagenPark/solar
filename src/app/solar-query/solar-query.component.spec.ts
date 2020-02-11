import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryComponent } from './solar-query.component';
import {SolarQueryFormComponent} from './solar-query-form/solar-query-form.component';
import {SolarQueryInstallerComponent} from './solar-query-installer/solar-query-installer.component';
import {SolarQueryResultsComponent} from './solar-query-results/solar-query-results.component';
import {SharedModule} from '../shared/shared.module';
import {provideMockStore} from '@ngrx/store/testing';
import * as fromRoot from 'src/app/state/app.state';

import * as fromSolarQuery from './state/';
import {SolarQueryState} from './state/solar-query.reducer';

describe('SolarQueryComponent', () => {
  let component: SolarQueryComponent;
  let fixture: ComponentFixture<SolarQueryComponent>;
  const initialState: SolarQueryState = {
    hasResults: false,
    postCode: null,
    numberOfPeople: '',
    isModalOpen: false,
    modalContentId: '',
    stateName: '',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [provideMockStore({initialState})],
      declarations: [ SolarQueryComponent, SolarQueryFormComponent, SolarQueryInstallerComponent, SolarQueryResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
