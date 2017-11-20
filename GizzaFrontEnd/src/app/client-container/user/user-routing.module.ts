import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent} from './user/user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationComponent} from './registration/registration.component';
import { ReinitialiseComponent} from "./reinitialise/reinitialise.component";
import {UserGuardService} from '../../core/user-guard/user-guard.service';

export const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'login', component: ConnexionComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'reinitialise', component: ReinitialiseComponent},
      { path: 'my-account',
        loadChildren: 'app/client-container/user/my-account/my-account.module#MyAccountModule',
        canActivate: [UserGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    userRoutes
    // ,{ enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class UserRoutingModule { }
