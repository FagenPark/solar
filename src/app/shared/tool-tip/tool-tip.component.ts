import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as queryActions from 'src/app/solar-query/state/solar-query.actions';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnInit {
  @Input() modalContent: string;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  openModal() {
    this.store.dispatch(new queryActions.SetModalContent(this.modalContent));
    this.store.dispatch(new queryActions.ToggleModal(true));
  }
}
