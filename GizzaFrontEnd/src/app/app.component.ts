import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterDataService } from './core/router-data/router-data.service';
import * as JWT from 'jwt-decode';
import { UserDataService } from './core/user-data/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  decodedJwt: any;
  jwt: any;

  constructor(private router: Router,
    private routerDataService: RouterDataService,
    public userDataService: UserDataService) {
/*
    this.jwt = localStorage.getItem('currentUser');
    const jwtObject = JSON.parse(this.jwt);
    let decodedJwt: any;
    decodedJwt = this.jwt && JWT(jwtObject.token);
    if (jwtObject.token) {
      if ((new Date().getTime() / 1000 - 9000) < decodedJwt.exp) {
        this.userDataService.setConnected(true);
        this.userDataService.setEmail(decodedJwt.sub);
        console.log("ohayou", typeof (decodedJwt));
        console.log("ohayou", decodedJwt.exp);
        console.log("time", (new Date().getTime() / 1000 + 9000));
        console.log("comparaison", (new Date().getTime() / 1000 - 9000) > decodedJwt.exp);
      }
    }
*/
  }

  ngOnInit(): void {
    this.router.events
      .filter(navigationEnds => navigationEnds instanceof NavigationEnd)
      .pairwise().subscribe(navigationEnds => {
        let currentUrl = navigationEnds[1]['url'];
        this.routerDataService.setLastVisitedUrl(this.routerDataService.getVisitedUrl());
        this.routerDataService.setVisitedUrl(currentUrl);
      });


    // this.user.checkConnexionStatus();
    // const decoded = JWT('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGltYWcuZnIiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTUwNTk5NTM5MH0.iAb2qd7nj4fS4WYyPrq9fQrWYDyB5hU-piPcSrz6bEfY2VjrWh7q7PBrI_Tp2gCZ-qLs5lnAP8CE--2ljzKN-Q');
    // console.log(decoded);
  }
}
