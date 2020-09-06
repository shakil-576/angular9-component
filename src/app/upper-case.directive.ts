import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appUpperCase]",
})
export class UpperCaseDirective {
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
    elementRef.nativeElement.style.backgroundColor = "red";
  }
}
