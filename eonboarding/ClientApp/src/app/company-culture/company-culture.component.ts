import { Component } from '@angular/core';

@Component({
  selector: 'app-company-culture',
  templateUrl: './company-culture.component.html',
  styleUrls: ['./company-culture.component.css']
})
export class CompanyCultureComponent {
  carouselImages = [
    { 
      heading: 'Moback Offsite 2022', 
      details: 'Moback Offsite was a great event orgainised by Moback team for all the employees.Everyone from different part of India joined in person and took part in the event.It was full of fun with team-bondind activities, dance, play and laugh.' ,
      images: [
        { src: '../../assets/images/offsite-5.jpg', alt: 'Image 5' },
        { src: '../../assets/images/offsite-1.jpeg', alt: 'Image 1' },
        { src: '../../assets/images/offsite-2.jpeg', alt: 'Image 2' },
        { src: '../../assets/images/offsite-3.jpeg', alt: 'Image 3' },
        { src: '../../assets/images/offsite-4.jpg', alt: 'Image 4' },
      ]
    },
    { 
      heading: 'Moback Diwali Celebration 2022', 
      details: 'Some glimse of Deepavali celebration in office premises',
      images: [
        { src: '../../assets/images/diwali-3.jpeg', alt: 'Image 5' },
        { src: '../../assets/images/diwali-2.jpeg', alt: 'Image 6' }
      ]
    },
    { 
      heading: 'Moback CSR Program – Free Health Check Up Camp', 
      details: '',
      images: [
        { src: '../../assets/images/CSR-2.jpeg', alt: 'Image 7' },
        { src: '../../assets/images/CSR-1.jpeg', alt: 'Image 8' },
      ]
    },
  ];
}
