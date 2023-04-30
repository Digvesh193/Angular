import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {

  constructort(){

  }

  //pure pipe example

  obj = {name:"digvesh",id:1}

  // array = [1,2,3,4]

  // myName : string = "hello"

  onChange(){
    // this.myName = "digvesh"
    // this.array[2]=4
    this.obj.name = "digvesh"
  }
}
