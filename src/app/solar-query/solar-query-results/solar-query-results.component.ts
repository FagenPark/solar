import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-solar-query-results',
  templateUrl: './solar-query-results.component.html',
  styleUrls: ['./solar-query-results.component.scss']
})
export class SolarQueryResultsComponent implements OnInit {
  @Input() postCode: string;
  @Input() numberOfPeople: number;

  constructor() { }

  ngOnInit() {
  }

  getEnergyUsage(): number {
    // TODO check calculation
    return this.numberOfPeople * 10;
  }

  getSystemSize(): number {
    // TODO check calculation
    return this.numberOfPeople * 1.5;
  }

  getPayback(): string {
    return this.numberOfPeople * 1 + '-' + this.numberOfPeople * 1.5;
  }

  getSavings(): number {
    return this.numberOfPeople * 150;
  }

  getMinPrice() {
    return this.numberOfPeople * 1000;
  }

  getMaxPrice() {
    return this.numberOfPeople * 2000;
  }
}
