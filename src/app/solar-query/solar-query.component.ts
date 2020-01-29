import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from './state/';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
      state('open', style({
        height: '*'
      })),
      state('close', style({
        height: '0px'
      })),
      transition('open <=> close', animate(300))
    ])
  ]
})
export class SolarQueryComponent implements OnInit {

  displayResults$: Observable<boolean>;
  postCode$: Observable<string>;
  numberOfPeople$: Observable<number>;
  modalContent$: Observable<string>;
  isModalOpen$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.displayResults$ = this.store.pipe(select(fromSolarQuery.getHasResults));
    this.postCode$ = this.store.pipe(select(fromSolarQuery.getPostCode));
    this.numberOfPeople$ = this.store.pipe(select(fromSolarQuery.getNumberOfPeople));
    this.modalContent$ = this.store.pipe(select(fromSolarQuery.getModalContent));
    this.isModalOpen$ = this.store.pipe(select(fromSolarQuery.getModalStatus));
  }

}
