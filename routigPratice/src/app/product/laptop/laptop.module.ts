import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreloadService } from "src/app/services/preload.service";
import { LaptopComponent } from "./laptop.component";
import { MonitorComponent } from "./monitor/monitor.component";
import { PowerbankComponent } from "./powerbank/powerbank.component";
import { RamComponent } from "./ram/ram.component";


const laptopRoute : Routes =[
    {path:"",component:LaptopComponent,children:[
        {path:"ram",component:RamComponent},
        {path:"powerbank",component:PowerbankComponent},
        {path:"monitor",component:MonitorComponent},
    ]}
]

@NgModule({
    declarations:[
        LaptopComponent,
        RamComponent,
        PowerbankComponent,
        MonitorComponent
    ],
    imports:[
        RouterModule.forChild(laptopRoute)
    ],
    providers:[PreloadService]
})

export class LaptopModule{
    constructor(){
        console.log("Laptop Module Called")
    }
}