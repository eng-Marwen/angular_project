import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListner]'
})
export class HostListnerDirective {

  constructor(private el:ElementRef,private rend:Renderer2) { }

  @HostBinding('style.border')br:string="";

  @HostListener('mouseover')methname(){
    this.rend.setStyle(this.el.nativeElement,'background','red');
    this.br="solid 7px orange ";
  }
  @HostListener('mouseleave')met(){
    this.rend.setStyle(this.el.nativeElement,'background','pink');
    this.br="none"
  }
  


}
