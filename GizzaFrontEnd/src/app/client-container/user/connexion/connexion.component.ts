import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataService } from '../../../core/user-data/user-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { RouterDataService } from '../../../core/router-data/router-data.service';
import {UserService} from '../user.service';

import * as JWT from 'jwt-decode';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit, OnDestroy {
  loginValid: boolean = true;

  model = {
    email: '',
    password: ''
  };

  constructor(public userDataService: UserDataService,
              public routerDataService: RouterDataService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.resizeConnexionPage);
    this.resizeConnexionPage();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeConnexionPage);
    this.routerDataService.setRedirected(false);
  }

  resizeConnexionPage(){
    let appHeader = document.getElementById('appHeader');
    let appHeaderHeight = appHeader.getBoundingClientRect().height;

    let appFooter = document.getElementById('appFooter');
    let appFooterHeight = appFooter.getBoundingClientRect().height;

    let connexionPage = document.getElementById('connexionPage');
    let connexionInnerPage = document.getElementById('connexionInnerPage');
    let connexionPageHeight = window.innerHeight - appHeaderHeight - appFooterHeight - 1;
    let connexionInnerPageHeight = connexionInnerPage.getBoundingClientRect().height;

    if(connexionInnerPageHeight < connexionPageHeight)
      connexionPage.style.height = connexionPageHeight + 'px';
    else
      connexionPage.style.height = connexionInnerPageHeight + 'px';
  }

  onSubmit() {
    this.userService.login(this.model.email, this.model.password).subscribe(data =>{
      if(data.res != null){

        this.loginValid = true;

        let token = data.res.token;
        let decodedToken = JWT(token);

        this.userDataService.setToken(token);
        this.userDataService.setEmail(decodedToken['username']);
        this.userDataService.setRole(decodedToken['role']);

        // store username and jwt token in local storage to keep user logged in between page refreshes
        //localStorage.setItem('currentUser', JSON.stringify({ decodedToken['username'], token: token }));

        this.userDataService.setConnected(true);
        this.router.navigate([this.routerDataService.getLastVisitedUrl()]);
      }else{
        this.loginValid = false;
      }
    });
  }
}
