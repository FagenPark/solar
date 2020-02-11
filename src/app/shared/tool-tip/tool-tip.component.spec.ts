import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipComponent } from './tool-tip.component';
import {provideMockStore} from '@ngrx/store/testing';

describe('ToolTipComponent', () => {
  let component: ToolTipComponent;
  let fixture: ComponentFixture<ToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [ ToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
