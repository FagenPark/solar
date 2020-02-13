import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import * as fromRoot from '../../state/app.state';
import * as fromSolarQuery from 'src/app/solar-query/state/';
import {MemoizedSelector, Store} from '@ngrx/store';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let mockStore: MockStore<fromRoot.State>;
  let mockIsModalOpen: MemoizedSelector<fromRoot.State, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({providers: [provideMockStore()],
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockIsModalOpen = mockStore.overrideSelector(fromSolarQuery.getModalStatus, false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
