import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit ,OnDestroy {
  @Input() type : string = ''
  @Input() placeholder : string = 'fdsfds'
  @Input() min !: string 
  @Input() max !: string 
  @Input() required : boolean = true
  @Input() label : string = ''
  @Input() id : string = ''
  @Output() inputValue : EventEmitter<string> = new EventEmitter<string>();
  @Input() allowPasteDate !: boolean
  require : boolean = false
  numberMinError : boolean = false
  numberMaxError : boolean = false
  sub = new Subscription()



  @ViewChild("inputValue") inputContainer !: ElementRef

  constructor(private storageServie : StorageService){

  }
  
  onInput(){
    if(this.type === "number"){
      if(this.min !='' && parseInt(this.min)>parseInt(this.inputContainer.nativeElement.value)){
        this.numberMinError = true
      }
      else{
        this.numberMinError=false
      }

      if(this.max !='' && parseInt(this.max)<parseInt(this.inputContainer.nativeElement.value)){
        this.numberMaxError = true
      }
      else{
        this.numberMaxError = false
      }
      
    }

    if(this.required && this.inputContainer.nativeElement.value.trim()===""){
      this.require = true
    }
    
    else{
      this.require = false
    }
    this.inputValue.emit(this.inputContainer.nativeElement.value)  
  }
  changeDateFormat() {
      let today: any = new Date();
      let dd: any = today.getDate();
      let mm: any = today.getMonth() + 1; 
      let yyyy: any = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = yyyy + '-' + mm + '-' + dd;
      this.min = today  
  }

  ngOnInit(): void {
    this.inputValue.emit("")
    
    this.sub = this.storageServie.submitObservable.pipe(
      // tap(res=>console.log(res,"cho gujarat"))
    ).subscribe(res=>{
      this.onInput()
    })  

    if(!this.allowPasteDate && this.type=="date"){
      this.changeDateFormat()
    }
    if(this.allowPasteDate){
      this.min = ""
    }
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }

  
   
  

 
}
