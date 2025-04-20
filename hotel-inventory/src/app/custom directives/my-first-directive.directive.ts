import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyFirstDirective]'
})
export class MyFirstDirectiveDirective  {

  constructor(private elemnt:ElementRef,private rend:Renderer2) { }

  @Input('appMyFirstDirective') set display(obj:Object){
    
    let array=Object.entries(obj);
    console.log(array);
     this.rend.addClass(this.elemnt.nativeElement,array[0][0])
  }


}
