import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Postcode} from './postcode';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolarQueryService {
  private postcodeUrl = 'api/postcodes';

  constructor(private http: HttpClient) { }
  getPostcodes(): Observable<Postcode[]> {
    return this.http.get<Postcode[]>(this.postcodeUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getPostcodeInformation(postcode: number): Observable<Postcode> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.postcodeUrl}/${postcode}`;
    return this.http.get<Postcode>(url, { headers })
      .pipe(
        tap(data => console.log('info: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getEnergyUsage(numberOfPeople: number): number {
    // TODO check calculation
    return numberOfPeople * 10;
  }
  getSystemSize(numberOfPeople: number): number {
    // TODO check calculation
    return numberOfPeople * 1.5;
  }

  getPayback(numberOfPeople: number): string {
    return numberOfPeople * 1 + '-' + numberOfPeople * 1.5;
  }

  getSavings(numberOfPeople: number): number {
    return numberOfPeople * 150;
  }

  getMinPrice(numberOfPeople: number) {
    return numberOfPeople * 1000;
  }

  getMaxPrice(numberOfPeople: number) {
    return numberOfPeople * 2000;
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
