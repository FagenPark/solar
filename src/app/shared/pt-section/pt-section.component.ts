import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

export interface Accordion {
  sectionHeader: string;
  sectionBody: string;
  defaultStatus: boolean;
}

@Component({
  selector: 'app-pt-section',
  templateUrl: './pt-section.component.html',
  styleUrls: ['./pt-section.component.scss']
})
export class PtSectionComponent implements AfterViewInit, OnChanges {
  contentHeight: number;
status: boolean;
  @Input() sectionContent: Accordion;
  @Input() sectionId: number;
  @Input() defaultStatus: boolean;
  @Input() multiOpen: boolean;
  @Input() activeSectionId: number;
  @Input() flipCounter: number;
  @Output() updateAccordion = new EventEmitter<{ id: number; status: boolean }>();
  @ViewChild('sectionBody', {read: ElementRef}) accordionBody: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.contentHeight = this.accordionBody.nativeElement.scrollHeight;
    setTimeout(() => this.status = this.defaultStatus, 0);
    if (this.defaultStatus) {
      this.accordionBody.nativeElement.style.maxHeight = this.contentHeight + 'px';
    } else {
      this.accordionBody.nativeElement.style.maxHeight = null;
    }
  }
  toggleAccordion() {
    this.contentHeight = this.accordionBody.nativeElement.scrollHeight;
    this.status = !this.status;
    if (this.status) {
      this.updateAccordion.emit({id: this.sectionId, status: true});
    } else {
      this.accordionBody.nativeElement.style.maxHeight = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.contentHeight) {
      return;
    }
    if (this.activeSectionId === this.sectionId) {
      this.status ? this.accordionBody.nativeElement.style.maxHeight = this.contentHeight + 'px'
        : this.accordionBody.nativeElement.style.maxHeight = null;
    } else {
      if (this.status && !this.multiOpen) {
        this.status = false;
        this.accordionBody.nativeElement.style.maxHeight = null;
      }
    }
  }
}
