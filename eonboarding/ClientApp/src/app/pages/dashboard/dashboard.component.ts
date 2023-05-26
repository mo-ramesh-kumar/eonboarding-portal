import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Doughnut
  public doughnutChartLabels: string[] = ['Selected', 'Rejected'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450], label: 'Series A' }
  ];

  public chartGenderLabels: string[] = ['Male', 'Female'];
  public chartGenderDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450], label: 'Series A' }
  ];

  public chartExperianceLabels: string[] = ['Fresher', '2-5Yrs', '5-10Yrs', '10-12Yrs', '12+Yrs'];
  public chartExperianceDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100, 350, 450], label: 'Series A' }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    plugins: { legend: { position: 'bottom' } }
  };

  candidates = [
    {
      id:1,
      name: 'Rajesh Kumar',
      position: 'Software Engineer',
      email: 'rajesh.kumar@example.com',
      status: 'Selected'
    },
    {
      id:1,
      name: 'Priya Verma',
      position: 'Frontend Developer',
      email: 'priya.verma@example.com',
      status: 'T1'
    },
    {
      id:1,
      name: 'Amit Sharma',
      position: 'UI Designer',
      email: 'amit.sharma@example.com',
      status: 'T2'
    },
    {
      id:1,
      name: 'Amit Sharma',
      position: 'UI Designer',
      email: 'amit.sharma@example.com',
      status: 'HR'
    },
    {
      id:1,
      name: 'Sneha Patel',
      position: 'Project Manager',
      email: 'sneha.patel@example.com',
      status: 'OfferAccepted'
    },
    {
      id:1,
      name: 'Rahul Singh',
      position: 'QA Engineer',
      email: 'rahul.singh@example.com',
      status: 'OfferRejected'
    },
    {
      id:1,
      name: 'Neha Gupta',
      position: 'Data Analyst',
      email: 'neha.gupta@example.com',
      status: 'Rejected'
    }
  ];

  viewProfile(candidate: any) {
      
  }

  getCandidateStatus(candidate: any) {
    let cssClass = "";
    switch (candidate.status) {
      case "T1":
        cssClass = 'bg-blue';
        break;
      case "T2":
        cssClass = 'bg-blue';
        break;
      case "HR":
        cssClass = 'bg-blue';
        break;
      case "Selected":
        cssClass = 'bg-success';
        break;
      case "OfferAccepted":
        cssClass = 'bg-info';
        break;
      case "Rejected":
        cssClass = 'bg-danger';
        break;
      default:
        break;
    }

    return cssClass;
  }

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
