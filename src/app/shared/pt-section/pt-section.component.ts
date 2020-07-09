import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

export interface Accordion {
  sectionHeader: string;
  sectionBody: string;
  isActive: boolean;
}

@Component({
  selector: 'app-pt-section',
  templateUrl: './pt-section.component.html',
  styleUrls: ['./pt-section.component.scss']
})
export class PtSectionComponent implements OnInit, OnChanges {
  contentHeight: number;
  @Input() sectionContent: Accordion;
  @Input() sectionId: number;
  @Input() isActive: boolean;
  @Input() activeSectionId: number;
  @Input() flipCounter: number;
  @Output() updateAccordion = new EventEmitter<{ id: number; isActive: boolean }>();
  @ViewChild('sectionBody', {read: ElementRef}) accordionBody: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  toggleAccordion() {

    this.contentHeight = this.accordionBody.nativeElement.scrollHeight;
    this.updateAccordion.emit({id: this.sectionId, isActive: !this.sectionContent.isActive});
    this.accordionBody.nativeElement.classList.toggle('active');

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.contentHeight) {
      return;
    }
    console.log(changes);
    if (changes.isActive) {
      if (this.sectionContent.isActive) {
        this.accordionBody.nativeElement.style.maxHeight = this.contentHeight + 'px';
      } else {
        this.accordionBody.nativeElement.style.maxHeight = null;
      }
    } else {
      if (this.sectionContent.isActive) {
        this.accordionBody.nativeElement.style.maxHeight = null;
        setTimeout(() => this.updateAccordion.emit({id: this.sectionId, isActive: false}), 0);
        // this.updateAccordion.emit({id: this.sectionId, isActive: false});
      }
    }

  }
}
