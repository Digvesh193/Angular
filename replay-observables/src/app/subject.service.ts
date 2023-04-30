import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  videoEmit = new ReplaySubject<any>(5,4000)
  constructor() { }
}
