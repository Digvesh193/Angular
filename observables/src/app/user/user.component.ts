import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  count = 0;

  constructor(private common : CommonService){

  }

  btnClicked():void{
    this.common.setSubject(this.count++)
  }

  CompleteList():void{
    this.common.complete();
  }

  errorList():void{
    this.common.error("error")
  }

  
}
