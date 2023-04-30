import { ElementRef, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'myHighlights'
})

export class searchPipe implements PipeTransform{

    constructor(private elemRaf : ElementRef){

    }

    transform(value: any, searchValue: any) {
        
       console.log(this.elemRaf)
        const index = value.indexOf(searchValue)
        return value.replaceAll(searchValue,`<span>${searchValue}</span>`)
    }
    
}