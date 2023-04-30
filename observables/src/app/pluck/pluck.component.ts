import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  users = [
    {
      name:"Digvesh",
      skills:"Angular"
    },
    {
      name:"tej",
      skills:"HTML, CSS"
    },
    {
      name:"kalp",
      skills:"Node"
    },
    {
      name:"john",
      skills:"MongoDB"
    }
  ]

  constructor(){}

  ngOnInit(): void {
    const source = from(this.users)

    source.pipe(
      // map(data => data.name),
      // pluck(),
      toArray()
    ).subscribe(data=>{
      console.log(data)
    })

  }

}
