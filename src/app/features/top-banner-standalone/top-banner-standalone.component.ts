import { Component, AfterViewInit} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import SwiperCore from 'swiper'
import { Swiper } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../services/responsive.service';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-top-banner-standalone',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './top-banner-standalone.component.html',
  styleUrl: './top-banner-standalone.component.scss',
  providers: [ResponsiveService]
})
export class TopBannerStandaloneComponent implements AfterViewInit {
  constructor(public responsiveService: ResponsiveService){}
  slides  = [
    "beach-banner.jpg",
    "beach2.jpeg",
    "beach3.jpeg"
  ]

  ngAfterViewInit() {
    // Initialize Swiper after the view is loaded
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });
  }
}
