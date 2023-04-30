import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mycustompipe'
})

export class MyPipe implements PipeTransform{
    transform(value: any,limit:any) {
        if(value.length > limit){
            return value.substr(0,limit) + "..."
        }
        return value
    }
}