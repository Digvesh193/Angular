import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { AppListComponent } from './app-list/app-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamComponent,
    AppListComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
