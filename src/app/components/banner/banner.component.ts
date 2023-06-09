import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      '../../../assets/Images/Animal-welfare-&-save-birds-campaign.png',
      '../../../assets/Images/CSR-initiative-stands-for-Coffee--and-Farmer-Equity-1.png',
      '../../../assets/Images/Education-Supplies-for-Every--Pair-of-Shoes-Sold-2.png',
      '../../../assets/Images/Grow-Trees-On-the-path-to-environment-sustainability-1.png',
    ];
  }

  //for get current slide
  getSlide() {
    return this.slides[this.i];
  }

  //for previous slide
  getPrev() {
    this.i === 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  //for next slide
  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }
}
