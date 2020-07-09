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
    if (this.multipleOpen === true) {
      return;
    }
    const index = $event.id;
    this.accordions[index].isActive = $event.isActive;
    if ($event.isActive) {
      this.flipCounter++;
      this.activeSectionId = index;
    }
  }
}
