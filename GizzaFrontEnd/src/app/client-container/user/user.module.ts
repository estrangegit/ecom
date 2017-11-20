import { NgModule } from '@angular/core';
import { SharedModule} from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRoutingModule} from './user-routing.module';

import { ConnexionComponent } from './connexion/connexion.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReinitialiseComponent } from './reinitialise/reinitialise.component';
import {UserService} from './user.service';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ConnexionComponent,
                  RegistrationComponent,
                  UserComponent,
                  RegistrationComponent,
                  ReinitialiseComponent],
  providers: [UserService]
})
export class UserModule { }
