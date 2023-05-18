import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-candidates',
  templateUrl: './selected-candidates.component.html',
  styleUrls: ['./selected-candidates.component.css']
})
export class SelectedCandidatesComponent {
  candidates = [
    { name: 'Rahul Agarwal', position: 'Software Engineer', email: 'Rahul.Agarwal@moback.com' },
    { name: 'Pinky', position: 'UI/UX Designer', email: 'Pinky@moback.com' },
    { name: 'Raya', position: 'Project Manager', email: 'raya@moback.com' }
  ];

  sendOfferLetter(candidate: any) {
    // Logic to send an offer letter to the candidate
    console.log('Offer letter sent to:', candidate.name);
  }

  rejectCandidate(candidate: any) {
    // Logic to reject the candidate
    console.log('Candidate rejected:', candidate.name);
  }
}

