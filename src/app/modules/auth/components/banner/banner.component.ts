import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  slides: string[] = [];
  i: number;
  text: string[] = [];
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.i = 0;
    this.getAllBanners();
    setInterval(() => {
      this.getNext();
    }, 4000);
  }

  //getAllBannerData
  getAllBanners() {
    this.adminService.getAllBannerData('').subscribe({
      next: (res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.slides.push(res.data[i].image);
          this.text.push(res.data[i].text);
        }
      },
      error: () => {},
    });
  }

  //for get current slide
  getSlide() {
    return this.slides[this.i];
  }
  getText() {
    return this.text[this.i];
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
