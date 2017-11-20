import { Injectable } from '@angular/core';
import {UserDataService} from '../user-data/user-data.service';
import {CanActivate} from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate{

  constructor(private userDataService: UserDataService) { }

  canActivate(): boolean{
    return (this.userDataService.getRole() == 'ADMIN');
  }

}
