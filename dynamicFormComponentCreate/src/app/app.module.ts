import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { StorageService } from './storage.service';
import { TableComponent } from './table/table.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    DateComponent,
    TableComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
