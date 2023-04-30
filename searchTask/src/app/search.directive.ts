import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[highlights]'
})

export class SearchDirective {
    constructor(private elemRef : ElementRef){
        
    }

    @HostListener('input') onMouseLeave() {
        this.elemRef.nativeElement.style.backgroundColor = 'yellow'
      }
    
      
    

}