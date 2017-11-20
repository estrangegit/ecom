import { Component, OnInit } from '@angular/core';
import {Item, TypeItem} from '../model/model';
import {Router} from '@angular/router';
import {ItemService} from '../service/item.service';
import {ShoppingCartDataService} from '../shopping-cart/shopping-cart-data.service';

@Component({
  selector: 'app-recapitulation-commande',
  templateUrl: './order-recapitulation.component.html',
  styleUrls: ['./order-recapitulation.component.css']
})
export class OrderRecapitulationComponent implements OnInit {

  commande: {nom: string, prix: number, quantite: number}[] = [];
  orderIds: {idProduit: number, quantite: number}[] = [];

  constructor(private router: Router,
              private itemService: ItemService,
              private shoppingCartDataService: ShoppingCartDataService) {}

  ngOnInit() {

    for(let i = 0; i < this.shoppingCartDataService.getShoppingItems().length; i++){
      this.orderIds.push({idProduit: this.shoppingCartDataService.getShoppingItems()[i].item.id,
                            quantite: this.shoppingCartDataService.getShoppingItems()[i].quantity});
    }

    this.itemService.sendOrder(this.orderIds).subscribe(data =>{
      for(let i = 0; i < data.res.produitsCommandes.length; i++){
        this.commande.push({
          nom: data.res.produitsCommandes[i].nom,
          prix: data.res.produitsCommandes[i].prix,
          quantite: data.res.produitsCommandes[i].quantite
        });
      }
    });

    this.shoppingCartDataService.initShoppinCart();
  }

  totalPrice(){
    let prixTotal = 0;
    for(let i = 0; i < this.commande.length; i++){
      prixTotal += this.commande[i].prix * this.commande[i].quantite;
    }
    return prixTotal;
  }

  carryOnPurchase(){
    this.router.navigate(['/purchase']);
  }
}
