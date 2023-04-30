import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private activeRouter : ActivatedRoute,private router:Router){
    
  }

  ngOnInit(): void {
    
    console.log(this.activeRouter.snapshot.params)
    // console.log(this.activeRouter.)
    this.activeRouter.params.subscribe(res=>{
      // console.log("response is => "+res)
      console.log(res)

    })
    // this.router.navigate(['/home'])
  }
}
