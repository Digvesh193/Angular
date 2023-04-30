import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewchildComponent } from "../dynamicComponent/viewchild/viewchild.component";
import { MonitorComponent } from "./laptop/monitor/monitor.component";
import { MobileComponent } from "./mobile/mobile.component";
import { MouseComponent } from "./mouse/mouse.component";
import { ProductComponent } from "./product.component";


const productRoutes : Routes = [
    {path:"",component:ProductComponent,children:[
        {path:"laptop",loadChildren:()=>import('./laptop/laptop.module').then(m=>m.LaptopModule)},
        {path:"mobile",component:MobileComponent},
        {path:"mouse",component:MouseComponent},
        {path:"ram",component:MonitorComponent}
      ]},
]

@NgModule({
    declarations:[
        ProductComponent,
        MobileComponent,
        MouseComponent,
        ViewchildComponent,
    ],
    imports:[
        RouterModule.forChild(productRoutes),   
    ],
    // exports:[ProductComponent]

})
export class ProductModule{
    constructor(){
        
        console.log("Product Module Called")
    }
}