import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SolarQueryService} from '../solar-query.service';
import {Observable} from 'rxjs';
import {Postcode} from '../postcode';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-solar-query-results',
  templateUrl: './solar-query-results.component.html',
  styleUrls: ['./solar-query-results.component.scss']
})
export class SolarQueryResultsComponent implements OnInit {
  @Input() postCode: string;
  @Input() numberOfPeople: number;

  constructor(private solarQueryService: SolarQueryService) { }

  ngOnInit() {
    this.solarQueryService.getPostcodes().pipe(tap(data => console.log(data))).subscribe();
    this.solarQueryService.getPostcodeInformation(2077).subscribe();
  }

  getEnergyUsage(): number {
    return this.solarQueryService.getEnergyUsage(this.numberOfPeople);
  }

  getSystemSize(): number {
    return this.solarQueryService.getSystemSize(this.numberOfPeople);
  }

  getPayback(): string {
    return this.solarQueryService.getPayback(this.numberOfPeople);
  }

  getSavings(): number {
    return this.solarQueryService.getSavings(this.numberOfPeople);
  }

  getMinPrice() {
    return this.solarQueryService.getMinPrice(this.numberOfPeople);
  }

  getMaxPrice() {
    return this.solarQueryService.getMaxPrice(this.numberOfPeople);
  }

}
