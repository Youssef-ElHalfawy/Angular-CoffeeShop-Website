import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.transition = 'all 0.5s ease-in-out'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.transform = 'scale(1.1)'
  } 
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.transform = 'scale(1)'
  } 
}