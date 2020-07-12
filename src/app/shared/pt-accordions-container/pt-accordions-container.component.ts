import {Component, Input, OnInit} from '@angular/core';
import {Accordion} from '../pt-section/pt-section.component';

@Component({
  selector: 'app-pt-accordions-container',
  templateUrl: './pt-accordions-container.component.html',
  styleUrls: ['./pt-accordions-container.component.scss']
})

export class PtAccordionsContainerComponent implements OnInit {

  @Input() accordions: [Accordion];
  @Input() multipleOpen: boolean;
  activeSectionId: number;
  flipCounter = 0;

  constructor() { }

  ngOnInit(): void {
  }


  OnAccordionUpdate($event) {
    if ($event.status) {
      this.flipCounter++;
      this.activeSectionId = $event.id;
    }
  }
}
