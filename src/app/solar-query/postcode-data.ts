import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Postcode} from './postcode';

export class PostcodeData implements InMemoryDbService {
  createDb() {
    const postcodes: Postcode[] = [
      {
        id: 2,
        state: 'NSW'
      },
      {
        id: 8,
        state: 'NT'
      },
      {
        id: 3,
        state: 'VIC'
      },
      {
        id: 4,
        state: 'QLD'
      },
      {
        id: 7,
        state: 'TAS'
      },
      {
        id: 6,
        state: 'WA'
      },
      {
        id: 5,
        state: 'SA'
      }
    ];
    return {postcodes};
  }
}
