import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {filter, takeWhile} from 'rxjs/operators';

import * as queryActions from './solar-query/state/solar-query.actions';
import * as fromRoot from './state/app.state';
import * as appConstants from './app.constants';

@Component({
  selector: 'app-solar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private cTitle = appConstants.siteTitle;
  private siteDescription = appConstants.siteDescription;
  private ogImg = appConstants.ogImageUrl;
  routerEventSubscription: Subscription;
  isComponentActive = true;
  title = 'solar';

  constructor(private store: Store<fromRoot.State>,
              private router: Router,
              private siteTitle: Title,
              private meta: Meta) {
  }
  ngOnInit(): void {
    this.setLoadingAsPerNavStatus();
    this.updateMeta();
  }

  private setLoadingAsPerNavStatus() {
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
  }

  private updateMeta() {
    this.siteTitle.setTitle(this.cTitle);
    this.meta.updateTag({property: 'og:title', content: this.cTitle});
    this.meta.updateTag({property: 'og:description', content: this.siteDescription});
    this.meta.updateTag({property: 'og:image', content: this.ogImg});
    this.meta.updateTag({property: 'og:url', content: appConstants.siteUrl});
    this.meta.updateTag({name: 'twitter:title', content: this.cTitle});
    this.meta.updateTag({name: 'twitter:description', content: this.siteDescription});
    this.meta.updateTag({name: 'twitter:image', content: this.ogImg});
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
    this.routerEventSubscription.unsubscribe();
  }

}
