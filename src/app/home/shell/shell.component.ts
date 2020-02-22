import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fader} from '../../shared/animation,config';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    fader
  ]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }


}
