import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell/shell.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ChoiceHeaderComponent } from './home/choice-header/choice-header.component';
import { ChoiceFooterComponent } from './home/choice-footer/choice-footer.component';
import { LandingPageComponent } from './home/langing-page/landing-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SolarQueryModule} from './solar-query/solar-query.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {PostcodeData} from './solar-query/postcode-data';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    PageNotFoundComponent,
    ChoiceHeaderComponent,
    ChoiceFooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(PostcodeData, {delay: 1200}),
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    SolarQueryModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
