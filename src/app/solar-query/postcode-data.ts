import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Postcode} from './postcode';

const postCodeData: Postcode[] = [
  {
    id: 2,
    state: 'ACT'
  },
  {
    id: 8,
    state: 'NT'
  },
  {
    id: 9,
    state: 'NT'
  },
  {
    id: 20,
    state: 'NSW'
  },
  {
    id: 21,
    state: 'NSW'
  },
  {
    id: 22,
    state: 'NSW'
  },
  {
    id: 23,
    state: 'NSW'
  },
  {
    id: 24,
    state: 'NSW'
  },
  {
    id: 26,
    state: 'NSW'
  },
  {
    id: 25,
    state: 'NSW'
  },
  {
    id: 27,
    state: 'NSW'
  },
  {
    id: 28,
    state: 'NSW'
  },
  {
    id: 29,
    state: 'NSW'
  },
  {
    id: 30,
    state: 'VIC'
  },
  {
    id: 31,
    state: 'VIC'
  },
  {
    id: 32,
    state: 'VIC'
  },
  {
    id: 33,
    state: 'VIC'
  },
  {
    id: 34,
    state: 'VIC'
  },
  {
    id: 35,
    state: 'VIC'
  },
  {
    id: 36,
    state: 'VIC'
  },
  {
    id: 37,
    state: 'VIC'
  },
  {
    id: 38,
    state: 'VIC'
  },
  {
    id: 39,
    state: 'VIC'
  },
  {
    id: 80,
    state: 'VIC'
  },
  {
    id: 81,
    state: 'VIC'
  },
  {
    id: 82,
    state: 'VIC'
  },
  {
    id: 83,
    state: 'VIC'
  },
  {
    id: 84,
    state: 'VIC'
  },
  {
    id: 85,
    state: 'VIC'
  },
  {
    id: 86,
    state: 'VIC'
  },
  {
    id: 87,
    state: 'VIC'
  },
  {
    id: 88,
    state: 'VIC'
  },
  {
    id: 89,
    state: 'VIC'
  },
  {
    id: 40,
    state: 'QLD'
  },
  {
    id: 41,
    state: 'QLD'
  },
  {
    id: 42,
    state: 'QLD'
  },
  {
    id: 43,
    state: 'QLD'
  },
  {
    id: 44,
    state: 'QLD'
  },
  {
    id: 45,
    state: 'QLD'
  },
  {
    id: 46,
    state: 'QLD'
  },
  {
    id: 47,
    state: 'QLD'
  },
  {
    id: 48,
    state: 'QLD'
  },
  {
    id: 49,
    state: 'QLD'
  },
  {
    id: 90,
    state: 'QLD'
  },
  {
    id: 91,
    state: 'QLD'
  },
  {
    id: 92,
    state: 'QLD'
  },
  {
    id: 93,
    state: 'QLD'
  },
  {
    id: 94,
    state: 'QLD'
  },
  {
    id: 95,
    state: 'QLD'
  },
  {
    id: 96,
    state: 'QLD'
  },
  {
    id: 97,
    state: 'QLD'
  },
  {
    id: 98,
    state: 'QLD'
  },
  {
    id: 99,
    state: 'QLD'
  },
  {
    id: 50,
    state: 'SA'
  },
  {
    id: 51,
    state: 'SA'
  },
  {
    id: 52,
    state: 'SA'
  },
  {
    id: 53,
    state: 'SA'
  },
  {
    id: 54,
    state: 'SA'
  },
  {
    id: 55,
    state: 'SA'
  },
  {
    id: 56,
    state: 'SA'
  },
  {
    id: 57,
    state: 'SA'
  },
  {
    id: 58,
    state: 'SA'
  },
  {
    id: 59,
    state: 'SA'
  },
  {
    id: 60,
    state: 'WA'
  },
  {
    id: 61,
    state: 'WA'
  },
  {
    id: 62,
    state: 'WA'
  },
  {
    id: 63,
    state: 'WA'
  },
  {
    id: 64,
    state: 'WA'
  },
  {
    id: 65,
    state: 'WA'
  },
  {
    id: 66,
    state: 'WA'
  },
  {
    id: 67,
    state: 'WA'
  },
  {
    id: 68,
    state: 'WA'
  },
  {
    id: 69,
    state: 'WA'
  },
  {
    id: 70,
    state: 'TAS'
  },
  {
    id: 71,
    state: 'TAS'
  },
  {
    id: 72,
    state: 'TAS'
  },
  {
    id: 73,
    state: 'TAS'
  },
  {
    id: 74,
    state: 'TAS'
  },
  {
    id: 75,
    state: 'TAS'
  },
  {
    id: 76,
    state: 'TAS'
  },
  {
    id: 77,
    state: 'TAS'
  },
  {
    id: 78,
    state: 'TAS'
  },
  {
    id: 79,
    state: 'TAS'
  }
];

export class PostcodeData implements InMemoryDbService {
  createDb() {
    const postcodes = postCodeData;
    return {postcodes};
  }
}
