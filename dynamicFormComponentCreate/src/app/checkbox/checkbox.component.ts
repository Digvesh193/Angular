import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit,OnDestroy {

  @Input() type : string = ''
  @Input() required : boolean = false
  @Input() label : string = ''
  @Input() min : string = ''
  @Input() max : string = ''
  @Input() id : string = ''
  @Input() checkBoxArray : Array<any> = []
  @Output() checkBoxValue : EventEmitter<Array<any>> | any = new EventEmitter<Array<any>>()
  require : boolean = false 
  sub = new Subscription()

  constructor(private storageServie : StorageService){
    // console.log("Checkbox constructor called")
  }

  ngOnInit(): void {
   this.sub = this.storageServie.submitObservable.subscribe(res=>{
      // this.onChange()
      if(this.required){
        this.validation()
      }
    })  
    this.checkBoxValue.emit(this.checkBoxArray)
    // this.validation()
  }

  validation():void{
    for(let item of this.checkBoxArray){
      if(item["checked"]){
        this.require = false
        break;
      }
      this.require = true;  
      
    }
  }

  onCheck(){
    // alert("hello")
    if(this.required){
      this.validation()
    }
    this.checkBoxValue.emit(this.checkBoxArray)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }


}
