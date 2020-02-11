import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarQueryFormComponent } from './solar-query-form.component';
import {FormBuilder} from '@angular/forms';

describe('SolarQueryFormComponent', () => {
  let component: SolarQueryFormComponent;
  let fixture: ComponentFixture<SolarQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
