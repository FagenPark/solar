import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Postcode} from './postcode';
import {catchError, map, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromRoot from 'src/app/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class SolarQueryService {
  private postcodeUrl = 'api/postcodes';
  private payBackYears = [{
    ACT: '5 - 6', NSW: '4 - 5',
    QLD: '5 - 6',
    SA: '3 - 4',
    VIC: '5 - 6',
    TAS: '7 - 8',
    NT: '2 - 3',
    WA: '5 - 6'
  },
    {
      ACT: '5 - 6',
      NSW: '4 - 5',
      QLD: '5 - 6',
      SA: '3 - 4',
      VIC: '5 - 6',
      TAS: '7 - 8',
      NT: '2 - 3',
      WA: '5 - 6'
    }, {
      ACT: '5 - 6',
      NSW: '4 - 5',
      QLD: '5 - 6',
      SA: '3 - 4',
      VIC: '5 - 6',
      TAS: '7 - 8',
      NT: '2 - 3',
      WA: '5 - 6'
    }, {
      ACT: '5 - 6',
      NSW: '4 - 5',
      QLD: '5 - 6',
      SA: '3 - 4',
      VIC: '5 - 6',
      TAS: '7 - 8',
      NT: '2 - 3',
      WA: '5 - 6'
    }, {
      ACT: '5 - 6',
      NSW: '4 - 5',
      QLD: '4 - 5',
      SA: '3 - 4',
      VIC: '4 - 5',
      TAS: '6 - 7',
      NT: '2 - 3',
      WA: '4 - 5'
    }
  ];
  private annKWHs = [{
    ACT: '3,500 - 4,200', NSW: '3,300 - 4,000',
    QLD: '3,200 - 4,500',
    SA: '3,000 - 4,200',
    VIC: '3,000 - 4,400',
    TAS: '5,800 - 6,500',
    NT: '3,900 - 4,400',
    WA: '3,200 - 3,600'
  },
    {
      ACT: '6,200 - 6,900',
      NSW: '5,100 - 5,600',
      QLD: '4,600 - 7,100',
      SA: '4,500 - 5,400',
      VIC: '4,500 - 5,700',
      TAS: '7,300 - 8,200',
      NT: '8,200 - 9,200',
      WA: '4,600 - 5,100'
    }, {
      ACT: '6,300 - 7,000',
      NSW: '5,300 - 5,600',
      QLD: '4,900 - 8,400',
      SA: '5,200 - 6,500',
      VIC: '5,200 - 7,500',
      TAS: '8,400 - 9,400',
      NT: '9,100 - 10,200',
      WA: '5,500 - 6,200'
    }, {
      ACT: '6,300 - 7,000',
      NSW: '6,500 - 6,700',
      QLD: '5,800 - 8,900',
      SA: '6,000 - 7,600',
      VIC: '5,700 - 9,100',
      TAS: '8,400 - 9,400',
      NT: '9,500 - 10,600',
      WA: '6,400 - 7,200'
    }, {
      ACT: '8,500 - 9,500',
      NSW: '7,500 - 11,700',
      QLD: '6,700 - 8,900',
      SA: '6,400 - 7,800',
      VIC: '6,300 - 9,100',
      TAS: '10,300 - 11,500',
      NT: '10,400 - 11,600',
      WA: '6,800 - 7,600'
    }
  ];
  private annSavings = [{
    ACT: '$700 - $800', NSW: '$900 - $1,000',
    QLD: '$850 - $950',
    SA: '$1,250 - $1,350',
    VIC: '$800 - $900',
    TAS: '$550 - $600',
    NT: '$1,650 - $1,750',
    WA: '$900 - $1,000'
  },
    {
      ACT: '$900 - $1,000',
      NSW: '$1,150 - $1,250',
      QLD: '$1,100 - $1,200',
      SA: '$1,550 - $1,650',
      VIC: '$1,050 - $1,150',
      TAS: '$750 - $800',
      NT: '$2,100 - $2,200',
      WA: '$1,150 - $1,250'
    }, {
      ACT: '$900 - $1,000',
      NSW: '$1,150 - $1,250',
      QLD: '$1,100 - $1,200',
      SA: '$1,550 - $1,650',
      VIC: '$1,050 - $1,150',
      TAS: '$750 - $800',
      NT: '$2,100 - $2,200',
      WA: '$1,150 - $1,250'
    }, {
      ACT: '$900 - $1,000',
      NSW: '$1,150 - $1,250',
      QLD: '$1,100 - $1,200',
      SA: '$1,550 - $1,650',
      VIC: '$1,050 - $1,150',
      TAS: '$750 - $800',
      NT: '$2,100 - $2,200',
      WA: '$1,150 - $1,250'
    }, {
      ACT: '$1,200 - $1,300',
      NSW: '$1,650 - $1,750',
      QLD: '$1,450 - $1,550',
      SA: '$2,100 - $2,200',
      VIC: '$1,400 - $1,500',
      TAS: '$950 - $1,050',
      NT: '$2,800 - $2,900',
      WA: '$1,450 - $1,650'
    }
  ];
  private sqBaseUrl = 'https://www.solarquotes.com.au/quote/';

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
  }

  getSolarQuotesBaseUrl(): string {
    return  this.sqBaseUrl;
  }

  getPostcodeInformation(postcode: number): Observable<string> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.postcodeUrl}/${postcode.toString()[0]}`;
    return this.http.get<Postcode>(url, {headers})
      .pipe(
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
