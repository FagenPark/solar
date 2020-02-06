import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as queryActions from 'src/app/solar-query/state/solar-query.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: string;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  removeModal() {
    this.store.dispatch(new queryActions.ToggleModal(false));
  }

}
