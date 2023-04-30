import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RamComponent } from './product/laptop/ram/ram.component';
import { PreloadService } from './services/preload.service';
import { ServiceModule } from './service/service.module';
import { PrefixFullComponent } from './prefix-full/prefix-full.component';
import { ParamsComponent } from './params/params.component';
import { GuardServices } from './services/guard.service';
import { IsUserService } from './services/isUser.service';
import { DeactiveGuardServices } from './services/deactiveguard.service';
import { ResolveService } from './services/resolve.service';
import { ViewchildComponent } from './dynamicComponent/viewchild/viewchild.component';
import { ProductComponent } from './product/product.component';
import { SampleComponent } from './dynamicComponent/sample/sample.component';



const routes : Routes =[
  {path:"",component:HomeComponent},
  {path:"about",data:{myEn:"09"},component:AboutComponent,canDeactivate:[DeactiveGuardServices]},
  // {path:"laptop",component:ServiceComponent},
  // {path:"product",component:ProductComponent,children:[{}]},
  // {path:"product",component:ProductComponent,children:[
  //   // {path:"laptop",component:LaptopComponent,children:[
  //   //   {path:"ram",component:RamComponent}
  //   // ]},
  //   {path:"mobile",component:MobileComponent},
  //   {path:"mouse",component:MouseComponent},
  // ]},
  {path:"product",data:{myName:"kalp"},loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:"contact",data:{name:"rapidops"},component:ContactComponent,canActivate:[GuardServices]},
  {path:"ram",component:RamComponent},  
  {path:"prefix",redirectTo:"abc",pathMatch:"full"},
  {path:"abc",component:PrefixFullComponent,children:[
    {path:"",component:ContactComponent},
    {path:"ram",component:ContactComponent},
  ]},
  {path:"resolve",component:RamComponent,resolve:[ResolveService]},
  {path:"params/:id",data:[1,2,3,4],component:ParamsComponent,title:"myCom",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
] 


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent,
    PrefixFullComponent,
    ParamsComponent,
    SampleComponent,
    
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    // ProductModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy:PreloadService
    }),
  ],
  providers: [PreloadService,GuardServices,IsUserService,DeactiveGuardServices,ResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Called")
  }
}
