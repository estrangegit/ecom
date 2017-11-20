import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyAccountComponent } from './my-account/my-account.component';
import { MyAccountHomeComponent } from './my-account-home/my-account-home.component';
import { MyAccountModificationComponent } from './my-account-modification/my-account-modification.component';
import { MyAccountOrderListComponent } from './my-account-order-list/my-account-order-list.component';

export const myAccountRoutes: Routes = [
  {
    path: '', component: MyAccountComponent,
    children: [
      { path: '', component: MyAccountHomeComponent},
      { path: 'home', component: MyAccountHomeComponent},
      { path: 'order-list', component: MyAccountOrderListComponent },
      { path: 'modification', component: MyAccountModificationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    myAccountRoutes
    // ,{ enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }

