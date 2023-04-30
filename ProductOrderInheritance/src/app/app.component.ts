import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Item } from './base-class/item.component';
import { Order } from './base-class/order.component';
import { Product } from './base-class/product.component';
import { IceCream } from './base/icecream.component';
import { Strawberry, Vanila } from './base/vanila.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductOrderInheritance';

  constructor(private http: HttpClient,
    ){}

  productClass : Item = new Product(this.http)
  orderClass : Item = new Order(this.http)

}
