import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit,OnDestroy {
  @Input() type : string = ''
  @Input() required : boolean = false
  @Input() label : string = ''
  @Input() radioArray : Array<string> = []
  @Output() radioValue : EventEmitter<string> = new EventEmitter<string>()
  @Input() min : string = ''
  @Input() max : string = ''
  @Input() id : string = ''
  require : boolean = false 
  value : string = ""
  sub = new Subscription()

  constructor(private storageServie : StorageService){
    // console.log("radio component called")
  }

  ngOnInit(): void {
    this.radioValue.emit("")
   this.sub = this.storageServie.submitObservable.subscribe(res=>{
      // this.onChange()
      this.validation()
    })  
  }

  onChange(event: any){
    this.value = event.target.value
    this.validation()
    this.radioValue.emit(this.value)
  }
  validation():void{
    if(this.value=="" && this.required){
      this.require = true 
    }
    else{
      this.require = false
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
