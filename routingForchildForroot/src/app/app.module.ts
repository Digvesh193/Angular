import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app.routing.module';
import { PreloadService } from './preload.services';
import { ObservableComponent } from './observable/observable.component';
import { RouterModule } from '@angular/router';

@NgModule({
  //use of component
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ErrorComponent,
    ObservableComponent, 
  ],
  
  // other module // angular built in module
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  
  //services
  providers: [PreloadService],

  //start of app
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App module loaded")
  }
 }
