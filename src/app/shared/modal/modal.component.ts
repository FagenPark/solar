import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as queryActions from 'src/app/solar-query/state/solar-query.actions';
import {Observable} from 'rxjs';
import * as fromSolarQuery from '../../solar-query/state';
import {inOutAnimation} from '../animation,config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [inOutAnimation],
})
export class ModalComponent implements OnInit {

  isModalOpen$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isModalOpen$ = this.store.pipe(select(fromSolarQuery.getModalStatus));
  }

  removeModal() {
    this.store.dispatch(new queryActions.ToggleModal(false));
  }

}
