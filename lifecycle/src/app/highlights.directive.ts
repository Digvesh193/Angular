import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow'
   }
   @Input() appHighlights = '';  

   @HostListener('mouseenter') abasdf() {
    this.highlight(this.appHighlights);
  }
  
  // @HostListener('mouseleave') onMouseLeav() {
  //   this.highlight('');
  // }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
