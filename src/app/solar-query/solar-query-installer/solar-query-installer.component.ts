import {Component, Input, OnInit} from '@angular/core';
import {SolarQueryService} from '../solar-query.service';

@Component({
  selector: 'app-solar-query-installer',
  templateUrl: './solar-query-installer.component.html',
  styleUrls: ['./solar-query-installer.component.scss']
})
export class SolarQueryInstallerComponent implements OnInit {
  @Input() postCode: number;

  constructor(private solarQueryService: SolarQueryService) {
  }

  ngOnInit() {
  }

  findSolarInstaller() {
    return this.solarQueryService.getSolarQuotesBaseUrl() + '?postcode=' + this.postCode + '&referrer=choice';
  }
}
