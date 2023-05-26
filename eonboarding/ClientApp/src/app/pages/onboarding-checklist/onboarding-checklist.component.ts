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
      id: 2,
      name: 'Ramesh',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 3,
      name: 'Annu',
      selectedChecklist: [1, 2, 3, 4]
    },
    {
      id: 4,
      name: 'Ankit',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 5,
      name: 'Rupesh',
      selectedChecklist: [1]
    },
    {
      id: 6,
      name: 'Amit',
      selectedChecklist: [1, 2]
    },
    {
      id: 7,
      name: 'Suresh',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 8,
      name: 'Pooja',
      selectedChecklist: [1, 2, 3, 4]
    },
    {
      id: 9,
      name: 'Neha',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 10,
      name: 'Deepak',
      selectedChecklist: [1]
    }
  ];
  

  selectedCandidate: any = this.candidates[0];

  constructor() { }

  ngOnInit(): void {
  }

}
