import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  @ViewChild('formContainer',{static:false,read:ViewContainerRef}) container !: ViewContainerRef

  onCreate():void{
    const compRef = this.container.createComponent(HomeComponent)
    const compInstance = compRef.instance
    // console.log(compInstance)
    compInstance.myName = "kalp"
    compInstance.onCreate = this.hello
  }

  hello(){
    alert("hello digvesh")
  }

}
