import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-solar-query-installer',
  templateUrl: './solar-query-installer.component.html',
  styleUrls: ['./solar-query-installer.component.scss']
})
export class SolarQueryInstallerComponent implements OnInit {
  @Input() postCode: number;

  constructor() { }

  ngOnInit() {
  }

  findSolarInstaller(postcode: number) {

  }
}
