import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightsDirective } from './highlights.directive';
import { KeyPairComponent } from './key-pair/key-pair.component';
import { UnlessDirective } from './unless.directive';
import { MyPipe } from './myPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectiveComponent,
    HighlightsDirective,
    KeyPairComponent,
    UnlessDirective,
    MyPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
