import {AfterViewInit, Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    $('#myCarousel').height($('#myCarousel').width() / 3 );
    $(window).on('resize', function(){
      $('#myCarousel').height($('#myCarousel').width() / 3 );
    });
  }

  constructor() { }
}
