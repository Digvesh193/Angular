import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularComponent } from "./angular/angular.component";
import { MongodbComponent } from "./mongodb/mongodb.component";
import { NodeComponent } from "./node/node.component";
import { ServicesComponent } from "./services.component";

const serviceRoute : Routes =[
    {path:"",component:ServicesComponent,children:[
        {path:"node",component:NodeComponent},
        {path:"angular",component:AngularComponent},
        {path:"mongodb",component:MongodbComponent}
    ]}
]

@NgModule({
    declarations:[
        ServicesComponent,
        NodeComponent,
        AngularComponent,
        MongodbComponent,
    ],
    imports:[
        RouterModule.forChild(serviceRoute)
    ]
})
export class ServicesModule{
    constructor(){
        console.log("Services module loaded")
      }
}