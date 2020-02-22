import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from './state/';
import {expandCollapseAnimation} from '../shared/animation,config';

@Component({
  selector: 'app-solar-query',
  templateUrl: './solar-query.component.html',
  styleUrls: ['./solar-query.component.scss'],
  animations: [
    expandCollapseAnimation
  ]
})
export class SolarQueryComponent implements OnInit {
  displayResults$: Observable<boolean>;
  postCode$: Observable<number>;
  numberOfPeople$: Observable<string>;
  modalContentId$: Observable<string>;
  stateName$: Observable<string>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.displayResults$ = this.store.pipe(select(fromSolarQuery.getHasResults));
    this.errorMessage$ = this.store.pipe(select(fromSolarQuery.getErrormessage));
    this.postCode$ = this.store.pipe(select(fromSolarQuery.getPostCode));
    this.numberOfPeople$ = this.store.pipe(select(fromSolarQuery.getNumberOfPeople));
    this.modalContentId$ = this.store.pipe(select(fromSolarQuery.getModalContentId));
    this.stateName$ = this.store.pipe(select(fromSolarQuery.getStateName));
  }
}
