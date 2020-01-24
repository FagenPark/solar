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

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    PageNotFoundComponent,
    ChoiceHeaderComponent,
    ChoiceFooterComponent,
    SolarQueryComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
