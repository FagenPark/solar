import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAccordionComponent } from './pt-accordion.component';

describe('PtAccordionComponent', () => {
  let component: PtAccordionComponent;
  let fixture: ComponentFixture<PtAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
