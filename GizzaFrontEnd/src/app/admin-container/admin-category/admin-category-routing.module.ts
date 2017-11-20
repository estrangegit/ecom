import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminCategoryComponent} from './admin-category/admin-category.component';
import {AdminCategoryListComponent} from './admin-category-list/admin-category-list.component';


export const adminCategoryRoutes: Routes = [
  {
    path: '', component: AdminCategoryComponent,
    children: [
      { path: '', component: AdminCategoryListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    adminCategoryRoutes
    // ,{ enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AdminCategoryRoutingModule { }

