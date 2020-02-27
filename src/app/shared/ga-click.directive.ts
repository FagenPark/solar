import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appGaClick]'
})
export class GaClickDirective implements OnInit {
  @HostBinding('attr.data-tracking-category') ctg: string;
  @HostBinding('attr.data-tracking-action') act: string;
  @HostBinding('attr.data-tracking-label') lbl: string;
  @Input('appGaClick') isTrackingClick: boolean;
  @Input('ga-label') title: string;
  constructor() { }
  @HostListener('click') onClick() {
    if (this.isTrackingClick) {
      // @ts-ignore
      if (window.dataLayer !== undefined) {
        // @ts-ignore
        window.dataLayer.push({
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
    this.setGAAttrs();
  }

  private setGAAttrs() {
    this.ctg = 'Button';
    this.act = 'click';
    this.lbl = this.title;
  }
}
