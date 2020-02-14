import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from './state/';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-solar-query',
  templateUrl: './solar-query.component.html',
  styleUrls: ['./solar-query.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.3s ease-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0.3s ease-in', style({opacity: 0}))
      ])
    ]),
    trigger('expandCollapse', [
      transition(':enter', [
        style({height: '0'}),
        animate('0.7s ease-out', style({height: '*'}))
      ]),
      transition(':leave', [
        style({height: '*'}),
        animate('0.7s ease-in', style({height: '0'}))
      ])
    ])
  ]
})
export class SolarQueryComponent implements OnInit {
  isLoading = true;
  isGuerying$: Observable<boolean>;
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
    this.isGuerying$ = this.store.pipe(select(fromSolarQuery.getQueryingStatus));
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }
}
