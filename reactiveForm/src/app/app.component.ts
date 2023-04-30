import { Component, DoCheck, OnInit } from '@angular/core';
import { Form, FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  name = new FormControl('digvesh')

  notAllowedNames = ['kalp','digvesh']

  //using formGroup

  profileForm = new FormGroup({
    firstName : new FormControl("hello digvesh",[Validators.required,this.NaNames.bind(this)]),
    // lastName : new FormControl("hello dadhaniya",[Validators.required] ,this.NaEamils.bind(this)),
    lastName : new FormControl("hello dadhaniya",[Validators.required]),
    address : new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    }),
    skills :new FormArray([
      new FormControl("hello"),
      new FormControl("hello"),
    ])
   })

  //using formBuilder

  // profileForm !: FormGroup

  // profileForm = this.fb.
  constructor(private fb : FormBuilder){
    // this.profileForm = this.fb.group({
    //   firstName : [''],
    //   lastName : ['',Validators.required],
    //   address : this.fb.group({
    //     street : ['',Validators.maxLength(4)],
    //     city : [''],
    //     state : ['sated'],
    //     zip : ['']
    //   }),
    //   skills : this.fb.array([
    //     new FormControl("hello"),
    //     new FormControl("hello"),
    //   ]) 


    // })
  }

  get getSkill(){
    return (<FormArray>this.profileForm.get('skills')).controls
  }

  onAddSkill(){
   (<FormArray>(this.profileForm.get('skills'))).push(new FormControl("null"))
  }


  NaNames(control:FormControl){
    console.log("cutoms",control)
    if(this.notAllowedNames.includes(control.value)){
      return {'nameIsNotAllowed':true}
    }
    return null
  }

  NaEamils(control:FormControl):Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === "digves@gmail.com"){
          resolve({"emailNotAllowdd":true})
        }
        else{
          reject(null)
        }

      },1500)
    })
    return myResponse
  }

  ngOnInit(): void {

    // this.profileForm

    // console.log(this.profileForm) 
  }
  // ngDoCheck(): void {
  //   console.log(this.profileForm)
  // }

  formValidation():void{
    alert("hello")
    // return false
  }

  onSubmit(){
    console.log((<FormControl>this.profileForm.get("lastName")).value)
    // console.log(this.profileForm.value)
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName:"dadhaniya",
      // address:{
      //   city:"kadaya"
      // }

      lastName:"digvesh dadhaniya"
      
    })
    console.log(this.profileForm.value)
  }


}
