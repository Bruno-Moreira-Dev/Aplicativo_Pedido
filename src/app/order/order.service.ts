import { Injectable } from "@angular/core";

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: Http
  ) {}


  public itemsValue(): number {
    return this.cartService.total();
  }

  public cartItems(): CartItem[] {
    return this.cartService.items;
  }

  public increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  public decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  public remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  public clear() {
    this.cartService.clear();
  }

  public checkOrder(order: Order): Observable<string> {

    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(`${MEAT_API}/orders`,
                            JSON.stringify(order),
                            new RequestOptions({ headers: headers }))
                         .map(response => response.json())
                         .map(order => order.id)
  }

}
