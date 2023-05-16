import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-candidates',
  templateUrl: './selected-candidates.component.html',
  styleUrls: ['./selected-candidates.component.css']
})
export class SelectedCandidatesComponent {
  candidates = [
    { name: 'John Doe', position: 'Software Engineer', email: 'john.doe@example.com' },
    { name: 'Jane Smith', position: 'UI/UX Designer', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', position: 'Project Manager', email: 'bob.johnson@example.com' }
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

