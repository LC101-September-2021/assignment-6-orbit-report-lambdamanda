import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCounts]'
})
export class CountsDirective {
  @Input()  satellites = []
  constructor() { }

}
