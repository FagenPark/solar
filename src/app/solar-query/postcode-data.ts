import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Postcode} from './postcode';

export class PostcodeData implements InMemoryDbService {
  createDb() {
    const postcodes: Postcode[] = [
      {
        id: 2077,
        state: 'NSW',
        climateZone: '1'
      }
    ];
    return {postcodes};
  }
}
