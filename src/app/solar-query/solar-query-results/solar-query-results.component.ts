import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SolarQueryService} from '../solar-query.service';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromSolarQuery from '../state';
import {filter, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-solar-query-results',
  templateUrl: './solar-query-results.component.html',
  styleUrls: ['./solar-query-results.component.scss']
})
export class SolarQueryResultsComponent implements OnDestroy, AfterViewInit {
  @Input() postCode: number;
  @Input() numberOfPeople: string;
  @Input() stateName: string;
  @ViewChild('resultAnchor') resultAnchor: ElementRef;
  isComponentActive = true;

  constructor(private solarQueryService: SolarQueryService,
              private store: Store<fromRoot.State>) {
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }

  ngAfterViewInit(): void {
    this.store.pipe(select(fromSolarQuery.getQueryingStatus),
      takeWhile(() => this.isComponentActive),
      filter(data => data === false),
      tap(data => {
        this.resultAnchor.nativeElement.scrollIntoView({behavior: 'smooth'});
      })).subscribe();
  }

  getEnergyUsage(): string {
    return this.solarQueryService.getEnergyUsage(this.numberOfPeople, this.stateName);
  }

  getSystemSize(): number {
    return this.solarQueryService.getSystemSize(this.numberOfPeople);
  }

  getPayback(): string {
    return this.solarQueryService.getPayback(this.numberOfPeople, this.stateName);
  }

  getSavings(): number {
    return this.solarQueryService.getSavings(this.numberOfPeople, this.stateName);
  }

  getMinPrice() {
    return this.solarQueryService.getMinPrice(this.numberOfPeople);
  }

  getMaxPrice() {
    return this.solarQueryService.getMaxPrice(this.numberOfPeople);
  }

  getPeopleText() {
    if (this.numberOfPeople === '1') {
      return 'person';
    } else if (this.numberOfPeople === '5') {
      return 'people or more';
    }
    return 'people';
  }
}
