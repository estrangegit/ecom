import { Component, OnInit } from '@angular/core';
import {ShoppingCartDataService} from './shopping-cart-data.service';
import {Router} from '@angular/router';
import {Item} from '../model/model';
import {UserDataService} from '../../core/user-data/user-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingCartDataService : ShoppingCartDataService,
              public userDataService: UserDataService,
              private router: Router) {}

  ngOnInit() {}

  onCouponSubmit(couponCode: string){
    this.userDataService.setReductionCode(couponCode);
  }

  validateOrder(){
    this.router.navigate(['/purchase/shopping-cart-validation']);
  }

  removeItem(item: Item){
    this.shoppingCartDataService.removeShoppingItem(item);
  }

  modifyCoupon(){
    this.userDataService.setReductionCode('');
  }
}
