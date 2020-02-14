import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter, takeWhile} from 'rxjs/operators';
import * as queryActions from './solar-query/state/solar-query.actions';
import {Store} from '@ngrx/store';
import * as fromRoot from './state/app.state';

@Component({
  selector: 'app-solar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isComponentActive = true;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
  }
  ngOnInit(): void {
    this.router.events
      .pipe(
        takeWhile(() => this.isComponentActive),
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
      )
      .subscribe(event => {
        // If it's the start of navigation, add loading indicator
        if (event instanceof NavigationStart) {
          this.store.dispatch(new queryActions.ToggleQuerying(true));
          return;
        }

        // Else navigation has ended, so remove a loading indicator
        this.store.dispatch(new queryActions.ToggleQuerying(false));
      });
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }

}
