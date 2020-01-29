import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell/shell.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ChoiceHeaderComponent } from './home/choice-header/choice-header.component';
import { ChoiceFooterComponent } from './home/choice-footer/choice-footer.component';
import { SolarQueryComponent } from './solar-query/solar-query.component';
import { LandingPageComponent } from './home/langing-page/landing-page.component';
import { SolarQueryFormComponent } from './solar-query/solar-query-form/solar-query-form.component';
import { SolarQueryResultsComponent } from './solar-query/solar-query-results/solar-query-results.component';
import { SolarQueryInstallerComponent } from './solar-query/solar-query-installer/solar-query-installer.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {ReactiveFormsModule} from '@angular/forms';
import { ToolTipComponent } from './shared/tool-tip/tool-tip.component';
import { ModalComponent } from './shared/modal/modal.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    PageNotFoundComponent,
    ChoiceHeaderComponent,
    ChoiceFooterComponent,
    SolarQueryComponent,
    LandingPageComponent,
    SolarQueryFormComponent,
    SolarQueryResultsComponent,
    SolarQueryInstallerComponent,
    ToolTipComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
