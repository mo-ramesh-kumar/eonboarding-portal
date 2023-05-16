import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-letter-generation',
  templateUrl: './offer-letter-generation.component.html',
  styleUrls: ['./offer-letter-generation.component.css']
})
export class OfferLetterGenerationComponent {
  candidateName: string = '';
  position: string = '';
  offerDetails: string = '';

  generateOfferLetter() {
    // Logic to generate the offer letter using the entered details
    console.log('Offer letter generated for:', this.candidateName);
    console.log('Position:', this.position);
    console.log('Offer details:', this.offerDetails);
  }
}

