import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // @ViewChild("myForm") container !: NgForm
  // defaultCourse : string = "node"
  // username : string = ""

  // genders=[
  //   {id:'1',gender:"male"},
  //   {id:'2',gender:"female"},
  // ]

  // defaultGender = "female"
  

  // onSubmit(){
  //   console.log(this.container)
  //   console.log("submited") 
  //   this.container.reset()
  // }

  // emails(event: any):any{
  //     console.log("email function ",event)
  //     console.log("form value ",this.container)
  // }

  // setUsername(){
  //   // this.container.setValue({
  //   //   userDetail:{
  //   //     username:"hello",
  //   //     email:"digvesh@gmail.com"
  //   //   },
  //   //   course:"node",
  //   //   gender:"male"
  //   // })
  //   this.container.form.patchValue({
  //     userDetail:{
  //       username:"hello"  
  //     }
  //   })
  // } 


  //////////////////////////////////////

  // @ViewChild("myForm") container !: NgForm 
  // @ViewChild("usermain") group !: NgModelGroup
  // firstNames : string = "digvesh" 
  // defaultCourse : string = "Angular"
  // defaultCollage : string = "ADIT"
  // defaultSubject : string = "CD"


  // collages=[
  //   {id:'1',value:"GCET"},
  //   {id:'2',value:"BVM"},
  //   {id:'3',value:"ADIT"}
  // ]

  // subjects=[
  //   {value:"CN"},
  //   {value:"CD"},
  //   {value:"AI"},
  // ]



  // onSubmit(form: NgForm):void{
  //   console.log("User Group",this.group.value)
  //   console.log(this.container)
  //   console.log(this.container.form.value.firstName)
  //   this.container.form.value.firstName = "kalp"
  //   // this.firstNames = "kalp"
  //   // console.log(this.firstNames)
  //   form.setValue
  //   form.form.patchValue
   
  // }

  firstName : string = "digvesh dadhaniya"
  alphabetDefault : string = "e"
  collageDefault: string = "bvm"
  subjectDefault: boolean = true

  onSubmitMyform(form: NgForm){
    console.log(this.firstName)
    console.log(form)
  }

  setValue(form: NgForm){
      form.setValue({
        alphabet:"a",
        userData:{
          firstName:"digvesh dh",
          lastName:"aaaa"
        },
        collage:"adit"
      })
  }

  patchValue(form: NgForm){
  //  form.value.firstName.value = "Helkjfljsdf"
  form.value.userData.firstName= "sdfhkh"
  console.log(form.value.userData.firstName)

   console.log(form)
    form.form.patchValue({
      alphabet:"a"
    })
  }

  
}
