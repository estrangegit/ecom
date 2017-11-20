import { Component, OnInit } from '@angular/core';
import {ShoppingCartDataService} from '../shopping-cart/shopping-cart-data.service';
import {Item} from '../model/model';
import {UserDataService} from '../../core/user-data/user-data.service';
import {Router} from '@angular/router';
import {RouterDataService} from '../../core/router-data/router-data.service';

@Component({
  selector: 'app-shopping-cart-validation',
  templateUrl: './shopping-cart-validation.component.html',
  styleUrls: ['./shopping-cart-validation.component.css']
})
export class ShoppingCartValidationComponent implements OnInit {

  constructor(public shoppingCartDataService : ShoppingCartDataService,
              public userDataService: UserDataService,
              private routerDataService: RouterDataService,
              private router: Router) { }

  ngOnInit() {
    if(!this.userDataService.getConnected()){
      this.routerDataService.setRedirected(true);
      this.router.navigate(['/purchase/user/login']);
    }
  }

  order(){
    this.router.navigate(['/purchase/order-recapitulation']);
  }

  carryOnPurchase(){

    const index = this.shoppingCartDataService.getShoppingItems()
                    .findIndex(_shoppingItem => _shoppingItem.quantity == 0);

    if(index >= 0)
      this.shoppingCartDataService.removeShoppingItem(this.shoppingCartDataService.getShoppingItems()[index].item);

    this.router.navigate(['/purchase/pizza'])
  }

  removeOneShoppingItem(item: Item){
    this.shoppingCartDataService.removeShoppingItem(item, 1);
  }

  addOneShoppingItem(item: Item){
    this.shoppingCartDataService.addShoppingItem(item, 1);
  }

  removeItem(item: Item){
    this.shoppingCartDataService.removeShoppingItem(item);
  }

  onCouponSubmit(couponCode: string){
    this.userDataService.setReductionCode(couponCode);
  }

  modifyCoupon(){
    this.userDataService.setReductionCode('');
  }

}
