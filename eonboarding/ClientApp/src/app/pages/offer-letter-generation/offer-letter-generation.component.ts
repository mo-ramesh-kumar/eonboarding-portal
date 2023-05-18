import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-offer-letter-generation',
  templateUrl: './offer-letter-generation.component.html',
  styleUrls: ['./offer-letter-generation.component.css']
})
export class OfferLetterGenerationComponent {
  candidateName: string = '';
  position: string = '';
  offerDetails: string = '';

  generateOfferLetter(): void {
    // Logic to generate the offer letter based on candidate details
    const offerLetter = `
      Date: ${new Date().toLocaleDateString()}
      
      Dear ${this.candidateName},
      
      We are pleased to offer you the position of ${this.position} at our company. We have carefully reviewed your qualifications and believe that you will be a valuable asset to our team.
      
      Offer Details:
      
      ${this.offerDetails}
      
      Please review the offer terms and conditions carefully. If you have any questions or concerns, please don't hesitate to contact us.
      
      We look forward to welcoming you to our organization!
      
      Sincerely,
      Moback Technologies Pvt Ltd
    `;
  
    // Create a new Blob with the offer letter content
    const blob = new Blob([offerLetter], { type: 'text/plain;charset=utf-8' });
  
    // Save the offer letter file using FileSaver.js
    saveAs(blob, 'offer-letter.txt');
  }
}

