import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-checklist',
  templateUrl: './onboarding-checklist.component.html',
  styleUrls: ['./onboarding-checklist.component.css']
})
export class OnboardingChecklistComponent implements OnInit {

  checklistOptions = [
    {
      id: 1,
      value: 'Enroll Candidate'
    },
    {
      id: 2,
      value: 'Screen Candidate'
    }
    ,
    {
      id: 3,
      value: 'Interview Scheduled'
    },
    {
      id: 4,
      value: 'Interview Done'
    },
    {
      id: 5,
      value: 'Offer Sent'
    },
    {
      id: 6,
      value: 'Welcome email sent'
    }
  ]

  candidates = [
    {
      id: 1,
      name: 'Rajesh',
      selectedChecklist: [1, 2]
    },
    {
      id: 1,
      name: 'Ramesh',
      selectedChecklist: [1, 2,3]
    },
    {
      id: 1,
      name: 'Annu',
      selectedChecklist: [1, 2,3, 4]
    },
    {
      id: 1,
      name: 'Ankit',
      selectedChecklist: [1, 2,3]
    },
    {
      id: 1,
      name: 'Rupesh',
      selectedChecklist: [1]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
