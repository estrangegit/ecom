//Modules
import { NgModule } from '@angular/core';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { SharedModule} from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Composants
import { MyAccountComponent } from './my-account/my-account.component';
import { MyAcountHeaderComponent } from './my-acount-header/my-acount-header.component';
import { MyAccountModificationComponent } from './my-account-modification/my-account-modification.component';
import { MyAccountOrderListComponent } from './my-account-order-list/my-account-order-list.component';
import { MyAccountHomeComponent } from './my-account-home/my-account-home.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MyAccountRoutingModule
  ],
  declarations: [MyAccountComponent,
                  MyAcountHeaderComponent,
                  MyAccountModificationComponent,
                  MyAccountOrderListComponent,
                  MyAccountHomeComponent]
})
export class MyAccountModule { }
