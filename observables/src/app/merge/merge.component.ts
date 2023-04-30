import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(v=>'Tech video #'+(v+1)),take(5))
    const sourceComedy = interval(4000).pipe(map(v=>'Comedy video #'+(v+1)),take(3))
    const sourceNews = interval(1000).pipe(map(v=>'News video #'+(v+1)),take(4))

    const FinalObs = merge(sourceComedy,sourceNews,sourceTech)
    FinalObs.subscribe(res =>{
      console.log(res)
    })
  }
}
