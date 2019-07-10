import { Directive, ElementRef } from '@angular/core';
import { constructor } from 'q';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {
  constructor (private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor;

  constructor() 

  }

}
