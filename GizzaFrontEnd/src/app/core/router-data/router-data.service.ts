import { Injectable } from '@angular/core';

@Injectable()
export class RouterDataService {

  private lastVisitedUrl: string;
  private visitedUrl: string;
  private redirected: boolean;

  constructor() {
    this.visitedUrl = '';
    this.lastVisitedUrl = '';
    this.redirected = false;
  }

  public getVisitedUrl(){
    return this.visitedUrl;
  }

  public getLastVisitedUrl(){
    return this.lastVisitedUrl
  }

  public getRedirected(){
    return this.redirected;
  }

  public setVisitedUrl(visitedUrl: string){
    this.visitedUrl = visitedUrl;
  }

  public setLastVisitedUrl(lastVisitedUrl: string){
    this.lastVisitedUrl = lastVisitedUrl;
  }

  public setRedirected(redirected: boolean){
    this.redirected = redirected;
  }
}
