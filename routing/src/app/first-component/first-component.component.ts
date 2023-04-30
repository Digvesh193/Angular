import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { filter, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  constructor(private route : ActivatedRoute,private router: Router){
    
  }   

  ngOnInit(): void {
    // console.log(this.route.params)
    // this.route.params.pipe(
    //   // tap(data=>console.log(typeof data)),
    //   // toArray()
    //   filter(data=>data["id"]==9)
    // ).subscribe((data)=>{
    //   console.log(data)
    // })

    let id = this.route.snapshot.paramMap.get("id")
    console.log(id)

    this.router.navigate([`/params-component/${id}`])
    // this.route.paramMap.subscribe(data=>console.log(data))
    // this.route.url.subscribe(data=>console.log(data))
  }


}
