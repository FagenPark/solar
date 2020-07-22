import {Component, Input, OnInit} from '@angular/core';
import {SolarQueryService} from '../solar-query.service';

@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.scss']
})
export class ButtonBannerComponent implements OnInit {
  @Input() postCode: number;

  constructor(private solarQueryService: SolarQueryService) { }

  ngOnInit(): void {
  }

  findSolarInstaller() {
    return this.solarQueryService.getSolarQuotesBaseUrl() + '?postcode=' + this.postCode + '&referrer=choice';
  }
}
