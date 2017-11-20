import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService{

  private firstName: string;
  private lastName: string;
  private address: string;
  private phoneNumber: string;
  private email: string;
  private password: string;
  private connected: boolean;
  private role: string;
  private token: string;
  private reductionCode: string;

  constructor(){
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.phoneNumber = '';
    this.email = '';
    this.password = '';
    this.connected = false;
    this.role = '';
    this.token = '';
    this.reductionCode = '';
  }

  public getFirstName(){
    return this.firstName;
  }

  public getLastName(){
    return this.lastName;
  }

  public getAddress(){
    return this.address;
  }

  public getEmail(){
    return this.email;
  }

  public getPhoneNumber(){
    return this.phoneNumber;
  }

  public getPassword(){
    return this.password;
  }

  public getConnected(): boolean{
    return this.connected;
  }

  public getRole(){
    return this.role;
  }

  public getToken(){
    return this.token;
  }

  public getReductionCode(){
    return this.reductionCode;
  }

  public setFirstName(firstName: string){
    this.firstName = firstName;
  }

  public setLastName(lastName: string){
    this.lastName = lastName;
  }

  public setAddress(address: string){
    this.address = address;
  }

  public setEmail(email: string){
    this.email = email;
  }

  public setPhoneNumber(phoneNumber: string){
    this.phoneNumber = phoneNumber;
  }

  public setPassword(password: string){
    this.password = password;
  }

  public setConnected(connected: boolean){
    this.connected = connected;
  }

  public setRole(role: string){
    this.role = role;
  }

  public setToken(token: string){
    this.token = token;
  }

  public setReductionCode(reductionCode: string){
    this.reductionCode = reductionCode;
  }

  initUserDataService(){
    this.setFirstName('');
    this.setLastName('');
    this.setEmail('');
    this.setPhoneNumber('');
    this.setPassword('');
    this.setConnected(false);
    this.setRole('');
    this.setToken('');
    this.setReductionCode('');
  }
}
