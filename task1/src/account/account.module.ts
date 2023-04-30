import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './form/input/input.component';
import { RadioComponent } from './form/radio/radio.component';
import { CheckboxComponent } from './form/checkbox/checkbox.component';
import { DropdownComponent } from './form/dropdown/dropdown.component';
import { DateComponent } from './form/date/date.component';
import { AccountPipe } from './account.pipe';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    DropdownComponent,
    DateComponent,
    AccountPipe
  ],
  imports: [
    BrowserModule 
  ],
  exports:[FormComponent],
  bootstrap:[FormComponent]
})
export class AccountModule { }
