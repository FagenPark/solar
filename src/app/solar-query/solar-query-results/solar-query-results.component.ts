import {Component, Input, OnInit} from '@angular/core';
import {SolarQueryService} from '../solar-query.service';

@Component({
  selector: 'app-solar-query-results',
  templateUrl: './solar-query-results.component.html',
  styleUrls: ['./solar-query-results.component.scss']
})
export class SolarQueryResultsComponent implements OnInit {
  @Input() postCode: number;
  @Input() numberOfPeople: string;
  @Input() stateName: string;

  constructor(private solarQueryService: SolarQueryService) { }

  ngOnInit() {

  }

  getEnergyUsage(): number {
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

}
