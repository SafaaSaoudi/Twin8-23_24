import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private _el:ElementRef) { 
    this._el.nativeElement.style.color='black';
  }

  @HostListener('mouseenter') f1(){
    this._el.nativeElement.style.color='red';
    this._el.nativeElement.style.background='yellow';
  }
  
  @HostListener('mouseleave') f2(){
    this._el.nativeElement.style.color='black';
    this._el.nativeElement.style.background='white';
    
  }


}
