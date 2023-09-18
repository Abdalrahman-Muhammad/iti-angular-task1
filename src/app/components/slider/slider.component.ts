import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  currentImg: string = 'assets/imgs/1.jpg';
  imgs: string[] = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
  ];
  i: number = 0;
  autoSlideInterval: any;
  nextSlide(): void {
    this.i++;
    if (this.i === this.imgs.length) this.i = 0;
    this.currentImg = this.imgs[this.i];
  }
  backSlide(): void {
    this.i--;
    if (this.i < 0) this.i = this.imgs.length - 1;
    this.currentImg = this.imgs[this.i];
  }
  ngOnInit(): void {
    // Start the auto-slide interval
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to prevent memory leaks
    this.stopAutoSlide();
  }
  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 3 seconds (adjust as needed)
  }
  stopAutoSlide(): void {
    // Clear the auto-slide interval
    clearInterval(this.autoSlideInterval);
  }
}
