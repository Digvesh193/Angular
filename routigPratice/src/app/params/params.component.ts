import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  url : string ="http://google.com"

  constructor(private activeRouter:ActivatedRoute,private router : Router,private location:Location){

  }

  ngOnInit(): void {
    console.log(this.activeRouter.snapshot.data)
    // console.log(`${}`)
  }

  onNavigate():void{
    this.router.navigate(['../ram'])
  }
  onBack():void{
    this.location.back()
  }

}
