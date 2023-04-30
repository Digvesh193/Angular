import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userSubject : Subject<any>;

  constructor() { 
    this.userSubject = new Subject<any>();
  }

  getStudent(){
    return of(['student 1','student 2','student 3'])
  }
  
  getTeacher(){
    return of(['teacher 1','teacher 2','teacher 3'])

  }

  getClasses(){
    return throwError('test fail')
  }

  setSubject(data:any): void{
    this.userSubject.next(data)
  }

  complete():void{
    this.userSubject.complete()
  }

  error(data : any):void{
    this.userSubject.error(data);
  }

  unsubScribe(){
    this.userSubject.unsubscribe();
  }
  

  
  
}
