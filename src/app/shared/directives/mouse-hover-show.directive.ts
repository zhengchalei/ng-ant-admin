import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMouseHoverShow]'
})
export class MouseHoverShowDirective {

  @HostListener('mouseover')
  onMouseenter() {
    this.mouse("inline");
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.mouse('none');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private mouse(dis: string) {
    this.renderer.setStyle(this.el.nativeElement.lastChild, 'display', dis)
  }
}
