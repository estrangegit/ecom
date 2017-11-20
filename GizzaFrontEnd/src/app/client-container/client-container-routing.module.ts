import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientHomeComponent} from './client-home/client-home/client-home.component';
import { ItemComponent} from './item/item.component';

import { ClientContainerComponent } from './client-container/client-container.component';
import { ShoppingCartValidationComponent } from './shopping-cart-validation/shopping-cart-validation.component';
import { OrderRecapitulationComponent} from './order-recapitulation/order-recapitulation.component';


export const clientContainerRoutes: Routes = [
    {
        path: '', component: ClientContainerComponent,
        children: [
            { path: '', component: ClientHomeComponent },
            { path: 'pizza', component: ItemComponent },
            { path: 'drink', component: ItemComponent },
            { path: 'dessert', component: ItemComponent},
            { path: 'shopping-cart-validation', component: ShoppingCartValidationComponent},
            { path: 'order-recapitulation', component: OrderRecapitulationComponent},
            { path: 'user',
              loadChildren: 'app/client-container/user/user.module#UserModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(
        clientContainerRoutes
        // ,{ enableTracing: true } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class ClientContainerRoutingModule { }

