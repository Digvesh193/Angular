import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'datePipe'
})

export class AccountPipe implements PipeTransform{
    dateValue : any;
    month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    constructor(){

    }

    transform(value: any,type:any) {
        if(value===''){
            return '';
        }
        this.dateValue = this.date(value)
        
        if(type=="dd/mm/yyyy"){
            return `${this.dateValue.getDate()}/${this.dateValue.getMonth()+1>10?`${this.dateValue.getMonth()+1}`:`0${this.dateValue.getMonth()+1}`}/${this.dateValue.getFullYear()}`
        }   
        return `${this.dateValue.getDate()} ${this.month[this.dateValue.getMonth()]},${this.dateValue.getFullYear()}`
    }

    date(date: any){
        
        return new Date(date)
    }
    
}