import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { gizzaBackEndAPIConfig } from '../../shared/gizzaBackEndAPIConfig';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserDataService} from '../../core/user-data/user-data.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private userDataService: UserDataService) { }


  public login(username: string, password: string): Observable<any>{

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                .set('Authorization', 'Bearer ' + this.userDataService.getToken())
    };

    return this.http.post( gizzaBackEndAPIConfig.connexionUserUrl, body.toString(), options)
      .map(res => {
        const body: any = res;
        return {err: null, res: body};
      })
      .catch(err => {
        return Observable.of({err: err, res: null})
      });
  }

  public register(
    email: string,
    password: string,
    nom: string,
    prenom: string,
    adresse: string,
    telephone: string
  ): Observable<any>{

    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    body.set('nom', nom);
    body.set('prenom', prenom);
    body.set('adresse', adresse);
    body.set('telephone', telephone);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                .set('Authorization', 'Bearer ' + this.userDataService.getToken())
    };

    return this.http.post( gizzaBackEndAPIConfig.newUserUrl, body.toString(), options)
      .map(res => {
        const body: any = res;
        return {err: null, res: body};
      })
      .catch(err => {
        return Observable.of({err: err, res: null})
      });
  }
}
