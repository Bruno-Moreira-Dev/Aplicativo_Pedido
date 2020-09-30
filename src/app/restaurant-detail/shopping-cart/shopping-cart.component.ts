import { Component, OnInit, Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})

@Injectable()
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  public items(): any[] {
    return this.shoppingCartService.items;
  }

  public clear(): any {
    return this.shoppingCartService.clear();
  }

  public addItem(item: any) {
    this.shoppingCartService.additem(item);
  }

  public removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  public total(): number {
    return this.shoppingCartService.total();
  }

}
