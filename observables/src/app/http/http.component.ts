import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseClassComponent } from '../base-class/base-class.component';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

// export class HttpComponent extends BaseClassComponent implements OnInit {

//   constructor(){
//     super()
//   }

//   ngOnInit(): void {
//     super.showMyName()
//   }

// }
export class HttpComponent implements OnInit {

  api : Observable<any>

  constructor(private http: HttpClient) {
     this.api = this.http.get("https://jsonplaceholder.typicode.com",)
  }
  ngOnInit(): void {
  }

  onSubmit(data: string) {
    // console.log(data)
    const headers = new HttpHeaders().set('Content-Type','application/pdf')

    // headers.append("method","post")
    // console.log(headers.get("Content-Type"))
    // console.log(headers.getAll('Content-Type'))
    // console.log(headers.has('Content-Type'))
    // console.log(headers.keys())


    const paramss = new HttpParams().set("myName","dsh")
    paramss.append("myName","23")
    console.log(paramss.get('myName'))

    switch (data) {
      case "GET":
        console.log("get work")
        this.api = this.http.get("https://jsonplaceholder.typicode.com/users/",{responseType:'json',headers:headers,params:paramss,observe:'body',reportProgress:true})
        break;
      case "POST":
        this.api = this.http.post("https://jsonplaceholder.typicode.com/posts",{mytest:"hello"})
        console.log(this.api)
        break;
      case "PUT":
        console.log("put work")
        break;
      case "PATCH":
        console.log("patch work")
        break;
      case "DELETE":
        console.log("delete work")
        break;
    }

    this.api.subscribe(response=>{
      console.log(response)
    })
  }

}




interface Person {
  name: string,
  id: number
}
