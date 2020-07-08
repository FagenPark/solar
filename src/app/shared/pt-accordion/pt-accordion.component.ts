import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pt-accordion',
  templateUrl: './pt-accordion.component.html',
  styleUrls: ['./pt-accordion.component.scss']
})
export class PtAccordionComponent {
  isCollapsed = true;
  contentHeight: number;

  @Input() sectionHeader: string;
  @ViewChild('sectionBody', {read: ElementRef}) accordionBody: ElementRef;

  constructor() { }

  toggleAccordion() {
    const contentHeight = this.accordionBody.nativeElement.scrollHeight;
    this.isCollapsed = !this.isCollapsed;
    this.accordionBody.nativeElement.classList.toggle('active');
    if (this.accordionBody.nativeElement.style.maxHeight) {
      this.accordionBody.nativeElement.style.maxHeight = null;
    } else {
      this.accordionBody.nativeElement.style.maxHeight = contentHeight + 'px';
    }
  }
}
