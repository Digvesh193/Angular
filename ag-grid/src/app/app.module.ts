import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CellRenderComponent } from './cell-render/cell-render.component';
import { TableComponent } from './table/table.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { ColumnGroupComponent } from './column-group/column-group.component';
import { RowDataComponent } from './row-data/row-data.component';
import { SortOrderVisibilityRowgroupComponent } from './sort-order-visibility-rowgroup/sort-order-visibility-rowgroup.component';
import { RowComponent } from './row/row.component';
import { RowGroupComponent } from './row-group/row-group.component';
import { UpdateComponent } from './update/update.component';
import { UpdateCellRowComponent } from './update-cell-row/update-cell-row.component';
import { MoodComponent } from './mood/mood.component';
import { GenderComponent } from './gender/gender.component';
import { FillterComponent } from './fillter/fillter.component';

@NgModule({
  declarations: [
    AppComponent,
    CellRenderComponent,
    TableComponent,
    InfiniteScrollComponent,
    ColumnGroupComponent,
    RowDataComponent,
    SortOrderVisibilityRowgroupComponent,
    RowComponent,
    RowGroupComponent,
    UpdateComponent,
    UpdateCellRowComponent,
    MoodComponent,
    GenderComponent,
    FillterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
