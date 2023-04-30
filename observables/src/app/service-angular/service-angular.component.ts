import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AlertService, person } from '../services/alert.service';

@Component({
  selector: 'app-service-angular',
  templateUrl: './service-angular.component.html',
  styleUrls: ['./service-angular.component.css']
})
export class ServiceAngularComponent implements OnInit {
  
  product : person 
  product1 : Array<person>
  constructor(private alertMsg : AlertService){ 
    this.product = this.alertMsg.product
    this.product1 = this.alertMsg.product1
  }
  
  ngOnInit(): void {
    console.log(this.product)
    console.log(this.product1)
  }



  onClick(){
    this.alertMsg.alertMessage()
  }


}
