import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pt-accordion',
  templateUrl: './pt-accordion.component.html',
  styleUrls: ['./pt-accordion.component.scss']
})
export class PtAccordionComponent implements OnInit, AfterViewInit {
  isCollapsed = true;
  contentHeight: number;

  @Input() sectionHeader: string;
  @ViewChild('sectionBody', {read: ElementRef}) accordionBody: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.contentHeight = this.accordionBody.nativeElement.scrollHeight;
  }

  toggleAccordion() {
    this.isCollapsed = !this.isCollapsed;
    this.accordionBody.nativeElement.classList.toggle('active');
    if (this.accordionBody.nativeElement.style.maxHeight) {
      this.accordionBody.nativeElement.style.maxHeight = null;
    } else {
      this.accordionBody.nativeElement.style.maxHeight = this.contentHeight + 'px';
    }
  }
}
