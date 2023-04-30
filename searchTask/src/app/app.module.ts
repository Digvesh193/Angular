import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchDirective } from './search.directive';
import { searchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchDirective,
    searchPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
