import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter, takeWhile} from 'rxjs/operators';
import * as queryActions from './solar-query/state/solar-query.actions';
import {Store} from '@ngrx/store';
import * as fromRoot from './state/app.state';
import {Subscription} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-solar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  routerEventSubscription: Subscription;
  isComponentActive = true;
  title = 'solar';

  constructor(private store: Store<fromRoot.State>,
              private router: Router,
              private siteTitle: Title,
              private meta: Meta) {
  }
  ngOnInit(): void {
    this.routerEventSubscription = this.router.events
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
    this.siteTitle.setTitle('Choice solar estimator');
    this.meta.updateTag({name: 'title', content: 'CHOICE - Solar Estimator'});
    this.meta.updateTag({name: 'description', content: '\n' +
        'Estimate my solar system\n' +
        'Find out how much a solar system might cost you and what your savings might look like'});
    this.meta.updateTag({name: 'image', content: 'https://choice-solar.azureedge.net/assets/images/solar-estimator-media.png'});
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
    this.routerEventSubscription.unsubscribe();
  }

}
