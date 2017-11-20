import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../../../core/user-data/user-data.service';

@Component({
  selector: 'app-my-account-home',
  templateUrl: './my-account-home.component.html',
  styleUrls: ['./my-account-home.component.css']
})
export class MyAccountHomeComponent implements OnInit {

  constructor(public userDataService: UserDataService) { }

  ngOnInit() {
  }

}
