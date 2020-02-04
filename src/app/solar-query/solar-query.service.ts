import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Postcode} from './postcode';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolarQueryService {
  private postcodeUrl = 'api/postcodes';
  private payBackYears = [{ACT: '5-6', NSW: '4-5',
      QLD: '5-6',
      SA: '3-4',
      VIC: '5-6',
      TAS: '7-8',
      NT: '2-3',
      WA: '5-6'
    },
    {
      ACT: '5-6',
      NSW: '4-5',
      QLD: '5-6',
      SA: '3-4',
      VIC: '5-6',
      TAS: '7-8',
      NT: '2-3',
      WA: '5-6'
    }, {
      ACT: '5-6',
      NSW: '4-5',
      QLD: '5-6',
      SA: '3-4',
      VIC: '5-6',
      TAS: '7-8',
      NT: '2-3',
      WA: '5-6'
    }, {
      ACT: '5-6',
      NSW: '4-5',
      QLD: '5-6',
      SA: '3-4',
      VIC: '5-6',
      TAS: '7-8',
      NT: '2-3',
      WA: '5-6'
    }, {
      ACT: '5-6',
      NSW: '4-5',
      QLD: '4-5',
      SA: '3-4',
      VIC: '4-5',
      TAS: '6-7',
      NT: '2-3',
      WA: '4-5'
    }
  ];
  private annKWHs = [{ACT: '3740', NSW: '4260',
    QLD: '3640',
    SA: '3410',
    VIC: '4710',
    TAS: '6110',
    NT: '4120',
    WA: '3390'
  },
    {
      ACT: '6500',
      NSW: '5900',
      QLD: '5680',
      SA: '4940',
      VIC: '6170',
      TAS: '7770',
      NT: '8690',
      WA: '4900'
    }, {
      ACT: '6630',
      NSW: '6200',
      QLD: '6480',
      SA: '5870',
      VIC: '7390',
      TAS: '8900',
      NT: '9640',
      WA: '5830'
    }, {
      ACT: '6630',
      NSW: '7190',
      QLD: '7320',
      SA: '6830',
      VIC: '8110',
      TAS: '8900',
      NT: '10070',
      WA: '6790'
    }, {
      ACT: '9000',
      NSW: '9160',
      QLD: '7920',
      SA: '7200',
      VIC: '8950',
      TAS: '10920',
      NT: '11020',
      WA: '7160'
    }
  ];
  private annSavings = [{ACT: '$700 - 800', NSW: '$900 - 1000',
    QLD: '$850 - $950',
    SA: '$1250 - 1350',
    VIC: '$800 - 900',
    TAS: '$550 - 600',
    NT: '$1650 - 1750',
    WA: '$900 - 1000'
  },
    {
      ACT: '$900 - 1000',
      NSW: '$1150 - 1250',
      QLD: '$1100 - 1200',
      SA: '$1550 - 1650',
      VIC: '$1050 - 1150',
      TAS: '$750 - 800',
      NT: '$2100 - 2200',
      WA: '$1150 - 1250'
    }, {
      ACT: '$900 - 1000',
      NSW: '$1150 - 1250',
      QLD: '$1100 - 1200',
      SA: '$1550 - 1650',
      VIC: '$1050 - 1150',
      TAS: '$750 - 800',
      NT: '$2100 - 2200',
      WA: '$1150 - 1250'
    }, {
      ACT: '$900 - 1000',
      NSW: '$1150 - 1250',
      QLD: '$1100 - 1200',
      SA: '$1550 - 1650',
      VIC: '$1050 - 1150',
      TAS: '$750 - 800',
      NT: '$2100 - 2200',
      WA: '$1150 - 1250'
    }, {
      ACT: '$1200 - 1300',
      NSW: '$1650 - 1750',
      QLD: '$1450 - 1550',
      SA: '$2100 - 2200',
      VIC: '$1400 - 1500',
      TAS: '$950 - 1050',
      NT: '$2800 - 2900',
      WA: '$1450 - 1650'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getPostcodes(): Observable<Postcode[]> {
    return this.http.get<Postcode[]>(this.postcodeUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getPostcodeInformation(postcode: number): Observable<string> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.postcodeUrl}/${postcode.toString()[0]}`;
    return this.http.get<Postcode>(url, {headers})
      .pipe(
        tap(data => console.log('info: ' + JSON.stringify(data))),
        map(data => data.state),
        catchError(this.handleError)
      );
  }

  getEnergyUsage(numberOfPeople: string, stateName: string) {
    return this.annKWHs[Number(numberOfPeople) - 1][stateName];
  }

  getSystemSize(numberOfPeople: string): number {
    switch (numberOfPeople) {
      case '1': {
        return 4;
      }
      case '2': {
        return 5;
      }
      case '3': {
        return 5;
      }
      case '4': {
        return 5;
      }
      case '5': {
        return 6.6;
      }
      default:
        return 0;
    }
  }

  getPayback(numberOfPeople: string, stateName: string): string {
    return this.payBackYears[Number(numberOfPeople) - 1][stateName];
  }

  getSavings(numberOfPeople: string, stateName: string): number {
    return this.annSavings[Number(numberOfPeople) - 1][stateName];
  }

  getMinPrice(numberOfPeople: string): number {
    switch (numberOfPeople) {
      case '1': {
        return 4000;
      }
      case '2': {
        return 4500;
      }
      case '3': {
        return 4500;
      }
      case '4': {
        return 4500;
      }
      case '5': {
        return 5200;
      }
      default:
        return 0;
    }
  }

  getMaxPrice(numberOfPeople: string) {
    switch (numberOfPeople) {
      case '1': {
        return 6000;
      }
      case '2': {
        return 8000;
      }
      case '3': {
        return 8000;
      }
      case '4': {
        return 8000;
      }
      case '5': {
        return 9600;
      }
      default:
        return 0;
    }
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
