import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromSolarQuery from '../../solar-query/state';
import {Observable} from 'rxjs';
import * as fromRoot from '../../state/app.state';
import {upDownAnimation} from '../animation,config';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  animations: [upDownAnimation]
})
export class LoadingSpinnerComponent implements OnInit {
  isGuerying$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isGuerying$ = this.store.pipe(select(fromSolarQuery.getQueryingStatus));
  }

}
