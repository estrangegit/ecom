import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';
import {RouterDataService} from '../../core/router-data/router-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.css']
})
export class ClientContainerComponent implements OnInit {

  currentUrl: string = '';

  constructor(public routerDataService: RouterDataService,
              public router: Router) {}

  ngOnInit() {}
}
