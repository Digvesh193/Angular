import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LaptopComponent } from "./laptop/laptop.component";
import { MachineComponent } from "./machine/machine.component";
import { ProductComponent } from "./product.component";


const productRotes : Routes = [
    {path:"",component:ProductComponent,children:[
        {path:"laptop",component:LaptopComponent},
        {path:"machine",component:MachineComponent},
      ]},
]

@NgModule({
    declarations:[
        ProductComponent,
        LaptopComponent,
        MachineComponent,
       
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(productRotes)
    ],
    exports:[RouterModule]
})

export class ProductModule{
    constructor(){
        console.log("Product module loaded")
      }
}