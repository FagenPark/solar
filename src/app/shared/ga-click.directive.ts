import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appGaClick]'
})
export class GaClickDirective implements OnChanges {

  @HostBinding('attr.data-tracking-category') ctg: string;
  @HostBinding('attr.data-tracking-action') act: string;
  @HostBinding('attr.data-tracking-label') lbl: string;
  @Input('appGaClick') isTrackingClick: boolean;
  constructor(private el: ElementRef) { }
  @HostListener('click') onClick() {
    if (this.isTrackingClick) {
      console.log('hostBinding--', this.ctg, this.act, this.el.nativeElement.title);
      // @ts-ignore
      if (window.dataLayer !== undefined) {
        console.log('got datalayer');
        // @ts-ignore
        window.dataLayer.push({
          event: 'choiceTrackingEvent',
          choiceTrackingEventDetails: {
            category: this.ctg,
            action: this.act,
            label: this.el.nativeElement.title
          }
        }) ;
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ctg = 'Button';
    this.act = 'click';
  }
}
