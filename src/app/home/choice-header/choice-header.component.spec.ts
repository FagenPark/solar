import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceHeaderComponent } from './choice-header.component';

describe('ChoiceHeaderComponent', () => {
  let component: ChoiceHeaderComponent;
  let fixture: ComponentFixture<ChoiceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
