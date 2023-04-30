import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountServiceService {

  cskCountSubject : Subject<any>;
  miCountSubject : Subject<any>;
  gtCountSubject : Subject<any>;
  rcbCountSubject : Subject<any>;
  
  constructor() { 
    this.cskCountSubject = new Subject<any>();
    this.miCountSubject = new Subject<any>();
    this.gtCountSubject = new Subject<any>();
    this.rcbCountSubject = new Subject<any>();
  }

  cskSetCount(data : any){
    this.cskCountSubject.next(data)
  }
  miSetCount(data : any){
    this.miCountSubject.next(data)
  }
  gtSetCount(data : any){
    this.gtCountSubject.next(data)
  }
  rcbSetCount(data : any){
    this.rcbCountSubject.next(data)
  }
}
