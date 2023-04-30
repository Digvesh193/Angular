import { ElementRef, Pipe, PipeTransform } from "@angular/core";
import { CommonService } from "../common.service";

@Pipe({
    name:"hello",
    pure:false  
})

export class SearchPipe implements PipeTransform{

    constructor(private eleRef : ElementRef){}

    transform(value: any, ...args: any[]) {
        console.log("hello",value)
        // this.eleRef.nativeElement.style={color:"red"}
    //    console.log(this.eleRef.nativeElement)
    console.log(this.eleRef.nativeElement.innerHTML="myname")
    }

}