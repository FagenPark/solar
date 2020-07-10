import { Component, OnInit } from '@angular/core';
import { qAndAs} from '../../app.constants';

@Component({
  selector: 'app-solar-query-qanda',
  templateUrl: './solar-query-qanda.component.html',
  styleUrls: ['./solar-query-qanda.component.scss']
})
export class SolarQueryQandaComponent implements OnInit {
  qAndAs = qAndAs;

  constructor() { }

  ngOnInit(): void {
  }

}
