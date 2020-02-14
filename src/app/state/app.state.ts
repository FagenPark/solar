import {SolarQueryState} from '../solar-query/state/solar-query.reducer';
import {AppState} from './app.reducer';

export interface State {
  solarQuery: SolarQueryState;
  app: AppState;
}
