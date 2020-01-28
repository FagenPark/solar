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

}
