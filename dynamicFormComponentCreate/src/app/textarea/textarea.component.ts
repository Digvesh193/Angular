import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit,OnDestroy {
  @ViewChild("textArea") textAreaContainer !: ElementRef


  @Input() type : string = ''
  @Input() min !: string 
  @Input() max !: string 
  @Input() required : boolean = true
  @Input() label : string = ''
  @Input() id : string = ''
  @Output() textAreaValue : EventEmitter<string> = new EventEmitter<string>();
  require : boolean = false
  sub = new Subscription()

  constructor(private storageService : StorageService){}

  ngOnInit(): void {
    this.textAreaValue.emit("")
    this.sub = this.storageService.submitObservable.subscribe(res=>{
      this.onFoucsOut()
    })
  }

  onFoucsOut():void{
    if(this.required && this.textAreaContainer.nativeElement.value==""){
      this.require = true;
    }
    else{
      this.require = false
    }
    this.textAreaValue.emit(this.textAreaContainer.nativeElement.value)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }



  

}


