import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from './state/';
import {trigger} from '@angular/animations';
import {expandCollapseAnimation, inOutAnimation} from '../shared/animation,config';

@Component({
  selector: 'app-solar-query',
  templateUrl: './solar-query.component.html',
  styleUrls: ['./solar-query.component.scss'],
  animations: [
    trigger(inOutAnimation.name, inOutAnimation.definitions),
    trigger(expandCollapseAnimation.name, expandCollapseAnimation.definitions)
  ]
})
export class SolarQueryComponent implements OnInit {
  isLoading = true;
  displayResults$: Observable<boolean>;
  postCode$: Observable<number>;
  numberOfPeople$: Observable<string>;
  modalContentId$: Observable<string>;
  isModalOpen$: Observable<boolean>;
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
    this.isModalOpen$ = this.store.pipe(select(fromSolarQuery.getModalStatus));
    this.stateName$ = this.store.pipe(select(fromSolarQuery.getStateName));
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }
}
