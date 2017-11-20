import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [CommonModule, HttpClientModule, HeaderComponent, FooterComponent]
})
export class SharedModule { }
