import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryResultsComponent } from './solar-query-results.component';

describe('SolarQueryResultsComponent', () => {
  let component: SolarQueryResultsComponent;
  let fixture: ComponentFixture<SolarQueryResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarQueryResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
