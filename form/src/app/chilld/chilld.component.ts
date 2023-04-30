import { AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-chilld',
  templateUrl: './chilld.component.html',
  styleUrls: ['./chilld.component.css']
})
export class ChilldComponent implements AfterViewInit {
  myName : string = "aditya"
  @ContentChild("contentRef") contentChild !: ElementRef

  showMyName():string{
    // console.log(this.myName)
    return "rapidops"
  }

  ngAfterViewInit(): void {
    // console.log("content child",this.contentChild.nativeElement.style.color="red")
  }
}
