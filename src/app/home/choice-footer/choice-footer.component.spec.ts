import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceFooterComponent } from './choice-footer.component';

describe('ChoiceFooterComponent', () => {
  let component: ChoiceFooterComponent;
  let fixture: ComponentFixture<ChoiceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
