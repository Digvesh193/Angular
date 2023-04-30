import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { endWith } from 'rxjs';
import { ProductComponent } from 'src/app/product/product.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit {

  @ViewChild('box',{static:true}) box !:ElementRef;
  @ViewChild(ProductComponent) product !:ViewContainerRef

  constructor(){
    // console.log()
  }
 
  ngAfterViewInit()
  {
    console.log(this.product)
    console.log(this.box);
    this.box.nativeElement.style.color = "red"
    this.box.nativeElement.innerHTML = "HTML content changed"
  }
  ngOnInit(): void {
    console.log("this is from init",this.box);
  }

  // ngAfterViewChecked(): void {
  //   // console.log(this.product)
  //   console.log(this.box)
  // }


  
}
