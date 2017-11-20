import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import {AdminCategoryRoutingModule} from './admin-category-routing.module';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminCategoryRoutingModule
  ],
  declarations: [AdminCategoryComponent, AdminCategoryListComponent]
})
export class AdminCategoryModule { }
