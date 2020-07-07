import { NgModule } from '@angular/core';
import {SolarQueryComponent} from './solar-query.component';
import {SolarQueryFormComponent} from './solar-query-form/solar-query-form.component';
import {SolarQueryResultsComponent} from './solar-query-results/solar-query-results.component';
import {SolarQueryInstallerComponent} from './solar-query-installer/solar-query-installer.component';
import {SharedModule} from '../shared/shared.module';
import { SolarQueryQandaComponent } from './solar-query-qanda/solar-query-qanda.component';



@NgModule({
  declarations: [
    SolarQueryComponent,
    SolarQueryFormComponent,
    SolarQueryResultsComponent,
    SolarQueryInstallerComponent,
    SolarQueryQandaComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SolarQueryModule { }
