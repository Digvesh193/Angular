import { Component, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  behaviourSubject : BehaviorSubject<string>;
  subject : Subject<string>

  constructor(){
    this.behaviourSubject = new BehaviorSubject<string>("hello digvesh");
    this.subject = new Subject<string>();
  }

  ngOnInit(): void {
    this.behaviourSubject.subscribe(res=>{
      console.log("behaviourSubject => ",res)
    })

    this.subject.subscribe(res =>{
      console.log("subject => ",res)
    })

    
  }
}
