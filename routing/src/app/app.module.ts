import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { Error404Component } from './error404/error404.component';
import { ChildAComponent } from './first-component/child-a/child-a.component';
import { ChildBComponent } from './first-component/child-b/child-b.component';
import { ParamsComponent } from './params/params.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    Error404Component,
    ChildAComponent,
    ChildBComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
