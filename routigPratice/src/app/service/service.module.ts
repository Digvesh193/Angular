import { NgModule } from "@angular/core";
import { NodeComponent } from './node/node.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { RouterModule, Routes } from "@angular/router";
import { ServiceComponent } from "./service.component";

const serviceRoute : Routes =[
    {path:"service",component:ServiceComponent,children:[
        {path:"angular",component:AngularComponent},
        {path:"mongodb",component:MongodbComponent},
        {path:"node",component:NodeComponent},
        {path:"react",component:ReactComponent},
    ]}
]

@NgModule({
    declarations:[
    NodeComponent,
    MongodbComponent,
    AngularComponent,
    ReactComponent,
    ServiceComponent,
  ],
  imports:[
    RouterModule.forChild(serviceRoute)
  ]
})

export class ServiceModule{
    constructor(){
        console.log("Service Module Called")
    }
}