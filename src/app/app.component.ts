import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromRoot from './state/app.state';
import * as fromApp from './state/';
import {select, Store} from '@ngrx/store';
import {takeWhile, tap} from 'rxjs/operators';
import * as fromSolarQuery from './solar-query/state';
import * as appActions from './state/app.actions';

@Component({
  selector: 'app-solar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isComponentActive = true;
  errorMessage$: Observable<string>;
  isGuerying$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.isGuerying$ = this.store.pipe(select(fromApp.getLoadingStatus));
    this.store.pipe(select(fromSolarQuery.getErrormessage),
      takeWhile(() => this.isComponentActive),
      tap(data => {
        if (data) {
          this.store.dispatch(new appActions.ToggleLoading(false));
        }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
