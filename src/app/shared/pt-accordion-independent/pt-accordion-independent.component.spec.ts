import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAccordionIndependentComponent } from './pt-accordion-independent.component';

describe('PtAccordionComponent', () => {
  let component: PtAccordionIndependentComponent;
  let fixture: ComponentFixture<PtAccordionIndependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtAccordionIndependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtAccordionIndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
