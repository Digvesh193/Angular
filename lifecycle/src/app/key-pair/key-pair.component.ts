import { Component } from '@angular/core';

@Component({
  selector: 'app-key-pair',
  templateUrl: './key-pair.component.html',
  styleUrls: ['./key-pair.component.css']
})
export class KeyPairComponent {
  key : any = ''
  value : any = "key"
  sum(){
    // this.[this.value]="hello"
    
  }
  
}
