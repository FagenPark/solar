import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentComponent } from './modal-content.component';
import {provideMockStore} from '@ngrx/store/testing';

describe('ModalContentComponent', () => {
  let component: ModalContentComponent;
  let fixture: ComponentFixture<ModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [ ModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
