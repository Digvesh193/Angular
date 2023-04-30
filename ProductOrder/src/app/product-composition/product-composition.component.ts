import { Component, Input, OnInit } from '@angular/core';
import { ItemStorageService } from '../item-storage.service';
import { ProductComponent } from '../product/product.component';
import { ProductCompositionService } from './product-composition.service';

@Component({
  selector: 'app-product-composition',
  templateUrl: './product-composition.component.html',
  styleUrls: ['./product-composition.component.css'],
  providers:[
    { 
      provide:ItemStorageService,
      useClass:ProductCompositionService
    }
  ]
})
export class ProductCompositionComponent{

  @Input() modelClass !: any

  
  constructor(){
    console.log("composition called")
  }
  ngOnInit(): void {
    console.log(this.modelClass)

  }
}
