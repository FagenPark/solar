import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoQuery() {
    this.router.navigate(['/solar-estimator']);
  }
}
