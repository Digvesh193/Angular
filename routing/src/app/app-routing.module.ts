// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { ChildAComponent } from "./first-component/child-a/child-a.component";
import { ChildBComponent } from "./first-component/child-b/child-b.component";
import { FirstComponentComponent } from "./first-component/first-component.component";
import { ParamsComponent } from "./params/params.component";
import { SecondComponentComponent } from "./second-component/second-component.component";

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

const routes : Routes =[
  {path:"first-component/:id",component:FirstComponentComponent,title:"First-Component",
    children:[
      {
        path:'child-a',
        component:ChildAComponent,
        title:"FirstComponentChildA"
      },
      {
        path:'child-b',
        component:ChildBComponent,
        title:"FirstComponentChildB"
      }
    ]
},
  {path:"second-component",component:SecondComponentComponent,title:"Second-Component"},
  {path:"params-component/:id",component:ParamsComponent,title:"Params-Component"},
  {path:"",redirectTo:'/second-component',pathMatch:"full"},
  {path:"**",component:Error404Component}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
