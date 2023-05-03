import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

  // @ViewChild('myForm') templateForm !: NgForm
  // @ViewChild(AppComponent) a !: AppComponent

  templateForm !: FormGroup

  componentMetaData = [
    {name:"displayName"},
    {name:"fieldName"},
    {name:"type"},
    {name:"minLength"},
    {name:"maxLength"},
    {name:"required"},
  ]

  constructor(private modalService:NgbModal){

  }

  add(form:FormGroup){
    this.templateForm = form
  }

  open(content:any){
    for(let item of this.componentMetaData){
      this.templateForm.addControl(item.name,new FormControl(null))
    }
    this.modalService.open(content).result.then(
      (result)=>{
        //  console.log(this.templateForm)
        //  this.a.helllo()
        // console.log(this.a)
      }
    )
  }

  onSubmit(ad:any){
    console.log(ad)
  }
}
