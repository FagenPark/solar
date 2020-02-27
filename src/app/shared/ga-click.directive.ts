import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appGaClick]'
})
export class GaClickDirective implements OnInit, OnChanges {
  @HostBinding('attr.data-tracking-category') ctg: string;
  @HostBinding('attr.data-tracking-action') act: string;
  @HostBinding('attr.data-tracking-label') lbl: string;
  @Input('appGaClick') isTrackingClick: boolean;
  @Input('title') title: string;
  constructor() { }
  @HostListener('click') onClick() {
    if (this.isTrackingClick) {
      console.log('hostBinding--', this.ctg, this.act, this.lbl);
      // @ts-ignore
      if (window.dataLayer !== undefined) {
        console.log('got datalayer');
        // @ts-ignore
        window.dataLayer.push({
          event: 'choiceTrackingEvent',
          choiceTrackingEventDetails: {
            category: this.ctg,
            action: this.act,
            label: this.lbl
          }
        }) ;
      }
    }
  }
  ngOnInit(): void {
    this.ctg = 'Button';
    this.act = 'click';
    this.lbl = this.title;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.lbl = this.title;
  }
}
