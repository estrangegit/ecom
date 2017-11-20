import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-reinitialise',
  templateUrl: './reinitialise.component.html',
  styleUrls: ['./reinitialise.component.css']
})
export class ReinitialiseComponent implements OnInit, AfterViewInit, OnDestroy {

  email: string = '';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.resizeResetPasswordPage);
    this.resizeResetPasswordPage();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeResetPasswordPage);
  }


  onSubmit(){
    console.log('You asked to reset your password');
  }

  resizeResetPasswordPage(){
    let appHeader = document.getElementById('appHeader');
    let appHeaderHeight = appHeader.getBoundingClientRect().height;

    let appFooter = document.getElementById('appFooter');
    let appFooterHeight = appFooter.getBoundingClientRect().height;

    let resetPasswordPage = document.getElementById('resetPasswordPage');
    let resetPasswordInnerPage = document.getElementById('resetPasswordInnerPage');
    let resetPasswordPageHeight = window.innerHeight - appHeaderHeight - appFooterHeight - 1;
    let resetPasswordInnerPageHeight = resetPasswordInnerPage.getBoundingClientRect().height;

    if(resetPasswordInnerPageHeight < resetPasswordPageHeight)
      resetPasswordPage.style.height = resetPasswordPageHeight + 'px';
    else
      resetPasswordPage.style.height = resetPasswordInnerPageHeight + 'px';
  }
}
