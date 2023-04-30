import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { TableComponent } from './table/table.component';
import { AccountModule } from 'src/account/account.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    AccountModule
  ],
  bootstrap:[TableComponent]
})
export class UserModule { }
