import {Directive, Input, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appIniInputQueryParam]'
})
export class IniInputQueryParamDirective implements OnInit {
  @Input('appIniInputQueryParam') paramKey: string;

  constructor(private ngControl: NgControl) { }

  ngOnInit(): void {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has(this.paramKey)) {
      this.ngControl.control.patchValue(queryParams.get(this.paramKey));
      setTimeout(() => this.ngControl.control.markAllAsTouched(), 0); // force validation
    }
  }
}
