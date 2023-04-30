import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, toArray } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id:1,name:'Digvesh',gender:'Male'},
    {id:2,name:'Kriva',gender:'Female'},
    {id:3,name:'Kalp',gender:'Male'},
    {id:4,name:'Tej',gender:'Male'},
    {id:5,name:'Priyanka',gender:'Female'},
    {id:6,name:'Neha',gender:'Female'},
    {id:7,name:'Neeraj',gender:'Male'},
    {id:8,name:'Pooja',gender:'Female'},
    {id:9,name:'Malhar',gender:'Male'},
    {id:10,name:'Tirth',gender:'Male'},
    {id:11,name:'Savan',gender:'Male'},
    {id:12,name:'Riya',gender:'Female'},
    {id:13,name:'Sanjana',gender:'Female'},
  ]

  
  // data : any = []
  data2 : any = []
  data3 : any = []
  constructor(){}

  ngOnInit(): void {

    const source = from(this.dataArr)

    source.pipe(
      // map((data):any=>{
      //   if(data["id"] === 13){
      //     return data
      //   }
      // })
      filter((data):any=>{
        if(data.id===13){
          return true
        }
      })
    ).subscribe(res =>{
      console.log(res)
    })



    // const source = from(this.dataArr)

    // source.pipe(  
    //   map(data=>console.log(data))
    // ).subscribe(res=>{
    //   console.log(res)
    // })

    // const source = of(this.dataArr,"hello")
    // source.subscribe(data=>{
    //   console.log(data)
    // })

    // const source = from(this.dataArr)


    // //Filter

  
    // //// Filter by length
    // source.pipe(
    //   filter(member => member.name.length>6),
    //   toArray()
    // )
    // .subscribe(res =>{
    //   // console.log("filter",res)
    //   this.data = res
    // })

    // console.log(this.data)


    // //// Filter by gender
    // source.pipe(
    //   filter(member => member.gender === 'Female'),
    //   toArray()
    // )
    // .subscribe(res =>{
    //   // console.log("filter",res)
    //   this.data2 = res
    // })

    // console.log(this.data2)

    // //// Filter by select
    // source.pipe(
    //   filter(member => member.id<=8),
    //   toArray()
    // )
    // .subscribe(res =>{
    //   // console.log("filter",res)
    //   this.data3 = res
    // })

    // console.log(this.data3)


  }

}
