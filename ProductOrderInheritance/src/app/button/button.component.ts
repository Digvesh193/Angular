import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { form, InputBaseClass } from '../base-class/input.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends InputBaseClass {

  @Output() parentFunCall : EventEmitter<NgForm> = new EventEmitter<NgForm>();
  @Output() updateFunCall : EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("content") content !: ElementRef
  @ViewChild("myForm") myForm !: NgForm
  @Input() intialFormValue !: Array<any>
  @Input() title !: string
  @Input() buttonTitle !: string

  id : string = ""
  closeResult !: NgForm;
  formValue !: Array<form>
  isSubmit : boolean = false
	constructor(private modalService: NgbModal) {
    super() 
  }

  ngOnInit(): void {
  }


  setValue(resData: any){
    this.buttonTitle = "Update"
    this.id = resData[0].id
    this.formValue = resData
    this.open(this.content)
  }

  addData(){
    this.id = ""
    this.resetForm()
    this.open(this.content)
  }

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result: NgForm) => {
        this.isSubmit = true
        if(!this.error(result)){
          if(this.buttonTitle === "Update"){
            this.updateFunCall.emit({"result":result,"id":this.id})
          }
          else{
            this.parentFunCall.emit(result)
          }
        }
        },
      );
	}
  
  resetForm(){
    this.formValue = this.getFormValue(this.title)
    this.buttonTitle = "Add"
    this.isSubmit = false
  }

  error(result: NgForm):boolean{
    this.isSubmit = true
    for(let input in result.value){
      if(input === "quantity"){
        if(result.value[input]<1){
          alert("Quantity not nagative number")
          return true
        }
      }
      else if(result.value[input]===""){
        if(input==="product"){
        }
        else{
        }
        return true;
      }
    }
    return false
  }

}
