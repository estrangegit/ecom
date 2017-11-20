import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../client-container/service/item.service';
import { Category, Item, PIZZACATEGORIES, PIZZAS, BOISSONS, DESSERTS, TypeItem } from '../../client-container/model/model';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  categories: Category[] = [];
  currentType:string;
  items: Item[] = [];
  constructor( private itemService: ItemService) { }

  ngOnInit() {
    this.currentType = "pizzas"
  }


  getCategories(type: string){
    this.currentType = type;
    this.categories.length = 0;
    this.itemService.getCategories().subscribe(data => {
      for(let i = 0; i < data.res.data.length; i++){
        if(data.res.data[i].type == type)
          this.categories.push(new Category(data.res.data[i].id, data.res.data[i].libelle))
      }
    });
    this.categories.push(new Category(0, "Tous"));
    this.categories.push(new Category(1, "All"));
  }

}
