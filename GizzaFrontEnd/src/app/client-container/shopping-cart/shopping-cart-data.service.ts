import { Injectable } from '@angular/core';
import {Item, TypeItem} from '../model/model';

@Injectable()
export class ShoppingCartDataService {

  private shoppingItems: { item: Item, quantity: number }[];

  constructor() {
    this.shoppingItems = [];
  }

  public getShoppingItems() {
    return this.shoppingItems;
  }

  public setShoppingItems(shoppingItems: any[]) {
    this.shoppingItems = shoppingItems;
  }

  public addShoppingItem(item: Item, quantity: number = 1) {

    const index = this.shoppingItems.findIndex(_shoppingItem => _shoppingItem.item.id == item.id);

    if (index > -1) {
      this.shoppingItems[index].quantity += quantity;
    }
    else this.shoppingItems.push({item: item, quantity: quantity});
  }

  public removeShoppingItem(item: Item, quantity: number = -1) {
    let index = -1;

    for (let i = 0; i < this.shoppingItems.length; i++) {
      if (this.shoppingItems[i].item.id == item.id) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      if(quantity  == -1)
        this.shoppingItems.splice(index, 1);
      else{
        if(this.shoppingItems[index].quantity - quantity >= 0)
          this.shoppingItems[index].quantity -= quantity;
      }
    }
  }

  public totalPrice() {
    let total = 0;

    for (let i = 0; i < this.shoppingItems.length; i++) {
      total += this.shoppingItems[i].item.price * this.shoppingItems[i].quantity;
    }
    return total;
  }

  public initShoppinCart(){
    this.setShoppingItems([]);
  }

}
