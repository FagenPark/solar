import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from './state/';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {takeWhile} from 'rxjs/operators';

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
export class SolarQueryComponent implements OnInit, OnDestroy {
  isLoading = true;
  isComponentActive = true;
  displayResults$: Observable<boolean>;
  postCode$: Observable<number>;
  numberOfPeople$: Observable<string>;
  modalContentId$: Observable<string>;
  isModalOpen$: Observable<boolean>;
  stateName$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.displayResults$ = this.store.pipe(select(fromSolarQuery.getHasResults),
      takeWhile(() => this.isComponentActive));
    this.postCode$ = this.store.pipe(select(fromSolarQuery.getPostCode));
    this.numberOfPeople$ = this.store.pipe(select(fromSolarQuery.getNumberOfPeople));
    this.modalContentId$ = this.store.pipe(select(fromSolarQuery.getModalContentId));
    this.isModalOpen$ = this.store.pipe(select(fromSolarQuery.getModalStatus),
      takeWhile(() => this.isComponentActive));
    this.stateName$ = this.store.pipe(select(fromSolarQuery.getStateName));
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
