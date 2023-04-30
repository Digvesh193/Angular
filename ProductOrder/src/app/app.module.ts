import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { AgGridModule } from 'ag-grid-angular';
import { ItemStorageService } from './item-storage.service';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { ProComponent } from './pro/pro.component';
import { ProductTestComponent } from './product-test/product-test.component';
import { OrderTestComponent } from './order-test/order-test.component';
import { ProductCompositionComponent } from './product-composition/product-composition.component';
import { TestComponent } from './test/test.component';
// import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    SearchComponent,
    ButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    PopUpComponent,
    ProComponent,
    ProductTestComponent,
    OrderTestComponent,
    ProductCompositionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  

    
  ],
  providers: [ItemStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
