import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appWarning]'
})
export class WarningDirective implements AfterViewInit {
  @Input() appWarning = false;

  constructor(private e1: ElementRef) { 
    
  }

  ngAfterViewInit(): void {
    if (this.appWarning == true) {
      this.e1.nativeElement.className = 'warning';
    }
  }


}
