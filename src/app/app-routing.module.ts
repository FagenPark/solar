import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShellComponent} from './home/shell/shell.component';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import {SolarQueryComponent} from './solar-query/solar-query.component';
import {LandingPageComponent} from './home/langing-page/landing-page.component';


const routes: Routes = [
  {path: '', component: ShellComponent,
    children: [
      {path: 'landing-page', component: LandingPageComponent},
      {path: 'solar-query', component: SolarQueryComponent},
      { path: '', redirectTo: 'solar-query', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
