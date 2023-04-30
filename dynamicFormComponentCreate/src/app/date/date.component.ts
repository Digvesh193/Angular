import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{
  @Input() type: string = ''
  @Input() placeholder: string = 'fdsfds'
  @Input() min !: string
  @Input() max !: any
  @Input() required: boolean = false
  @Input() label: string = ''
  @Input() id: string = ''
  @Input() allowPasteDate !: string



  changeDateFormat() {
      let today: any = new Date();
      let dd: any = today.getDate();
      let mm: any = today.getMonth() + 1; 
      let yyyy: any = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = yyyy + '-' + mm + '-' + dd;
      this.min = today
  }

  ngOnInit(): void {
    if(this.allowPasteDate === "false"){
      this.changeDateFormat()
    }
    else{
        this.min = ""
      }
  }
}
