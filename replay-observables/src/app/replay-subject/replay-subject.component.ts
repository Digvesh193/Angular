import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {
  user1List = ['Angular 1','Angular 2']
  user2List = ['']
  user3List = ['']

  subscribeMode2:boolean = false
  subscribeMode3:boolean = false


  subscription2 : Subscription = new Subscription();
  subscription3 : Subscription = new Subscription();
  constructor(private subject : SubjectService){
    
  }


  ngOnInit(): void{
    this.subject.videoEmit.subscribe(res=>{
      this.user1List.push(res)
    }
    )
  } 
  onVideoAdd(video: any): void{
    this.subject.videoEmit.next(video)
  }

  user2Subscirbe(): void{
    if(this.subscribeMode2){
      this.subscription2.unsubscribe();
    }
    else{
      this.subscription2 = this.subject.videoEmit.subscribe({
         next:(data)=>this.user2List.push(data)
       })
      }
      this.subscribeMode2 = !this.subscribeMode2
  }
  user3Subscirbe(): void{
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    }
    else{
      this.subscription3 = this.subject.videoEmit.subscribe({
         next:(data)=>this.user3List.push(data)
       })
      }
    this.subscribeMode3 = !this.subscribeMode3
  }
}
