import {Directive, HostBinding, PLATFORM_ID, Inject, Input, OnChanges, OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Directive({
  selector: 'a[href]'
})
export class AnchorLinkDirective implements OnChanges {

  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @Input() href: string;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnChanges() {
    this.hrefAttr = this.href;
    if (this.isLinkExternal()) {
      // this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }
  }

  private isLinkExternal() {
    console.log(location.hostname);
    return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
  }

}
