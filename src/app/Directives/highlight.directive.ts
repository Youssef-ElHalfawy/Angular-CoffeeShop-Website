import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  defaultColor:string ='black';
  @Input('appHighlight') givenColor:string ='white';
    // dependancy injection
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.defaultColor  //from here
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.givenColor  //from the template
  } 
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = this.defaultColor
  } 
}
