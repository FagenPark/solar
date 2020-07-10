import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pt-accordion-independent',
  templateUrl: './pt-accordion-independent.component.html',
  styleUrls: ['./pt-accordion-independent.component.scss']
})
export class PtAccordionIndependentComponent {
  isCollapsed = true;

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
