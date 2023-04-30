import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Com2Component } from './com2/com2.component';
import { UserComponent } from './user/user.component';
import { PanelComponent } from './panel/panel.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { OfFromComponent } from './of-from/of-from.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectComponent } from './subject/subject.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMergeSwitchComponent } from './concat-merge-switch/concat-merge-switch.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { NotComponent } from './not/not.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ServiceAngularComponent } from './service-angular/service-angular.component';
import { AlertService } from './services/alert.service';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SearchPipe } from './pipe/Search.pipe';
import { HttpComponent } from './http/http.component';
import { BaseClassComponent } from './base-class/base-class.component';
import { UseOfServiceComponent } from './use-of-service/use-of-service.component';
import { ManualService } from './services/manual.service';
import { ChildComponent } from './use-of-service/child/child.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RequestInterCeptor } from './interceptor/request.interceptor';
import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    Com2Component,
    UserComponent,
    PanelComponent,
    ConcatComponent,
    MergeComponent,
    OfFromComponent,
    FilterComponent,
    TapComponent,
    PluckComponent,
    RetryComponent,
    SubjectComponent,
    MergemapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ConcatMergeSwitchComponent,
    ExhaustmapComponent,
    ForkJoinComponent,
    NotComponent,
    CatchErrorComponent,
    ServiceAngularComponent,
    PipeExampleComponent,
    SearchPipe,
    HttpComponent,
    BaseClassComponent,
    UseOfServiceComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path:'',component:AppComponent},
      {path:'a',component:AppComponent,children:[{
        path:'a',
        component:ChildComponent
      }]},
      {
        path:"**",
        component:ChildComponent
      }
    ])
  ],
  providers: [
 { provide:HTTP_INTERCEPTORS,useClass:RequestInterCeptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
