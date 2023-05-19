import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  candidates = [
    {
      name: 'Rajesh Kumar',
      position: 'Software Engineer',
      email: 'rajesh.kumar@example.com',
      status: 'Selected'
    },
    {
      name: 'Priya Verma',
      position: 'Frontend Developer',
      email: 'priya.verma@example.com',
      status: 'Round 1 Telephonic'
    },
    {
      name: 'Amit Sharma',
      position: 'UI Designer',
      email: 'amit.sharma@example.com',
      status: 'Round 2 Interview'
    },
    {
      name: 'Sneha Patel',
      position: 'Project Manager',
      email: 'sneha.patel@example.com',
      status: 'Offer Accepted'
    },
    {
      name: 'Rahul Singh',
      position: 'QA Engineer',
      email: 'rahul.singh@example.com',
      status: 'Offer Rejected'
    },
    {
      name: 'Neha Gupta',
      position: 'Data Analyst',
      email: 'neha.gupta@example.com',
      status: 'Rejected'
    }
  ];

  sendOfferLetter(candidate: any) {
    // Logic to send the offer letter to the candidate
    console.log('Sending offer letter to', candidate.name);
  }

  scheduleRound2(candidate: any) {
    // Logic to schedule round 2 with the candidate
    console.log('Scheduling Round 2 with', candidate.name);
  }

  scheduleRound3(candidate: any) {
    // Logic to schedule round 3 with the candidate
    console.log('Scheduling Round 3 with', candidate.name);
  }

  rejectCandidate(candidate: any) {
    // Logic to reject the candidate
    console.log('Rejecting', candidate.name);
  }
}
