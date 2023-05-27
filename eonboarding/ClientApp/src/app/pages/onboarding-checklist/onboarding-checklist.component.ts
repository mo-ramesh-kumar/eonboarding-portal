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
      name: 'Riya Kumari',
      selectedChecklist: [1, 2]
    },
    {
      id: 2,
      name: 'Rajsekhar Jha',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 3,
      name: 'Amit kumar',
      selectedChecklist: [1, 2, 3, 4]
    },
    {
      id: 4,
      name: 'Aaryan',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 5,
      name: 'Rupesh Mishra',
      selectedChecklist: [1]
    },
    {
      id: 6,
      name: 'Amit sharma',
      selectedChecklist: [1, 2]
    },
    {
      id: 7,
      name: 'Suresh singh',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 8,
      name: 'Pooja Kumari',
      selectedChecklist: [1, 2, 3, 4]
    },
    {
      id: 9,
      name: 'Neha Verma',
      selectedChecklist: [1, 2, 3]
    },
    {
      id: 10,
      name: 'Deepak Raj',
      selectedChecklist: [1]
    }
  ];
  

  selectedCandidate: any = this.candidates[0];

  constructor() { }

  ngOnInit(): void {
  }

}
