import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email !: string
  password !: string  

  onSubmit(myForm: NgForm){
    this.email = myForm.value.email
    this.password = myForm.value.password
  }
}
