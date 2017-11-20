import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {UserDataService} from '../user-data/user-data.service';

@Injectable()
export class UserGuardService implements CanActivate{

  constructor(private userDataService: UserDataService) { }

  canActivate(): boolean{
    return ((this.userDataService.getRole() == 'USER') || (this.userDataService.getRole() == 'ADMIN'));
  }
}
