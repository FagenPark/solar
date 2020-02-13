import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SolarQueryResultsComponent} from './solar-query-results.component';
import {ToolTipComponent} from '../../shared/tool-tip/tool-tip.component';
import {HttpClientModule} from '@angular/common/http';
import {provideMockStore} from '@ngrx/store/testing';

describe('SolarQueryResultsComponent', () => {
  let component: SolarQueryResultsComponent;
  let fixture: ComponentFixture<SolarQueryResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideMockStore()],
      declarations: [ SolarQueryResultsComponent, ToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryResultsComponent);
    component = fixture.componentInstance;
    component.numberOfPeople = '1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
