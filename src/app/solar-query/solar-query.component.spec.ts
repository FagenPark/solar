import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryComponent } from './solar-query.component';

describe('SolarQueryComponent', () => {
  let component: SolarQueryComponent;
  let fixture: ComponentFixture<SolarQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarQueryComponent ]
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
