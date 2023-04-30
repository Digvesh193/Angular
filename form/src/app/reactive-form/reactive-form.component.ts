import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm !: FormGroup

  collages=[
    {id:'1',value:"GCET"},
    {id:'2',value:"BVM"},
    {id:'3',value:"ADIT"}
  ]

  constructor(){
   
  }
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetail': new FormGroup({
        'username':new FormControl("digvesh",Validators.required),
        'email':new FormControl("digveshpatel969@gmail.com",[Validators.required,Validators.email]),
      }),
      'collage':new FormControl("BVM"),
      'subject':new FormControl('Angular'),
      'skills':new FormArray([
        new FormControl("null"),
        new FormControl("null"),
        new FormControl("null"),
        new FormControl("null"),
        new FormControl("null"),
      ])
    })

   console.log(this.myReactiveForm)
  }

  onSubmit(){
    this.myReactiveForm.patchValue({
      
    })
    console.log(this.myReactiveForm)
    // console.log(this.myReactiveForm.get("email")?.valid)
  }


}
