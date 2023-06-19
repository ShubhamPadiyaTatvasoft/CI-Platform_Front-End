import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileNumber]',
})
export class MobileNumberDirective {
  private regex: RegExp = new RegExp('^[0-9]*$');
  private specialKeys: Array<string> = ['Backspace'];
  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(
      event.key
    );
    //console.log(event.key);
    if (inputValue && !String(inputValue).match(this.regex)) {
      event.preventDefault();
    }
  }
}
