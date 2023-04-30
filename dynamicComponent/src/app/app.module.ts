import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { WatchComponent } from './watch/watch.component';
import { BurgerComponent } from './burger/burger.component';
import { OvanComponent } from './ovan/ovan.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LaptopComponent,
    WatchComponent,
    BurgerComponent,
    OvanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
