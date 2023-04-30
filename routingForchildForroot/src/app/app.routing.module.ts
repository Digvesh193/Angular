import { NgModule } from "@angular/core";
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PreloadService } from "./preload.services";

const appRoutes : Routes=[
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"services",loadChildren:()=>import('./services/services.module').then(m => m.ServicesModule)},
    {path:"product/:id",data:{preload:true},loadChildren:()=>import('./product/product.module').then(m => m.ProductModule)},
    {path:"contact",component:ContactComponent},
    {path:"login",component:LoginComponent},
    {path:"login/home",component:ContactComponent},
    // {path:"params/:id",component:LoginComponent},    
    {path:"**",component:ErrorComponent}
  ]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(appRoutes,{
            preloadingStrategy:PreloadService
        })
    ],
    // providers: [PreloadService],
    // exports:[RouterModule]

})

export class AppRoutingModule{
    constructor(){
        console.log("Routing module loaded")
      }
}