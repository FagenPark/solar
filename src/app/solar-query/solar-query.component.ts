import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromRoot from 'src/app/state/app.state';
import * as fromSolarQuery from './state/';

@Component({
  selector: 'app-solar-query',
  templateUrl: './solar-query.component.html',
  styleUrls: ['./solar-query.component.scss']
})
export class SolarQueryComponent implements OnInit {

  displayResults$: Observable<boolean>;
  postCode$: Observable<string>;
  numberOfPeople$: Observable<number>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.displayResults$ = this.store.pipe(select(fromSolarQuery.getHasResults));
    this.postCode$ = this.store.pipe(select(fromSolarQuery.getPostCode));
    this.numberOfPeople$ = this.store.pipe(select(fromSolarQuery.getNumberOfPeople));
  }

}
