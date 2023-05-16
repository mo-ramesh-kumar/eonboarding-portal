import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-company-culture',
  templateUrl: './company-culture.component.html',
  styleUrls: ['./company-culture.component.css']
})
export class CompanyCultureComponent {

  carouselImages = [
    { src: '../', alt: 'Image 1' },
    { src: '../../assets/images/moback-bg2.jpg', alt: 'Image 2' },
    { src: '../../assets/images/moback.jpeg', alt: 'Image 3' },
    // Add more images as needed
  ];


}

