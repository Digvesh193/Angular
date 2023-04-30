import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChilldComponent } from './chilld/chilld.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
 
  title = 'form';
  number = 6
  @ViewChild("container") container2 !: ChilldComponent
  @ViewChild("contentRef") container !: ElementRef
  @ViewChild("contentRef") container1 !: ChilldComponent

  constructort(){
    
  }

  ngOnInit():void {
    // // this.number = ""
    // console.log("OnInit",this.container)
  }
  ngAfterViewInit(): void {
    // console.log("After",this.container)
    // console.log("After",this.container1)
    // console.log("After",this.container2)

    // const hello = this.container
    // console.log(hello)

    // console.log("After",this.container.nativeElement.innerHTML="<h1>hello</h1>")
    // console.log("After",this.container.nativeElement)
  }




}
