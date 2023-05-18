import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-approval',
  templateUrl: './faculty-approval.component.html',
  styleUrls: ['./faculty-approval.component.css']
})
export class FacultyApprovalComponent {
  approvalStage: string = ''; // Current approval stage
  isRejected: boolean = false; // Flag to indicate if the faculty is rejected
  facultyComments: string = ''; // Faculty review comments

  // Candidate details
  candidate: any = {
    name: 'Rahul Agarwal',
    isIndian: true,
    level: 'Technical Round 1',
    facultyReview: 'Pending'
  };

  
  canApprove(stage: string): boolean {
    
    return true;
  }

  approvalStages = [
    { name: 'Telephonic Interview', facultyName: 'Madhavan VB', approved: false, rejected: false, disabled: false },
    { name: 'Technical Round 1', facultyName: 'Ilayaraja', approved: false, rejected: false, disabled: false },
    { name: 'Technical Round 2', facultyName: 'Vinod Raj', approved: false, rejected: false, disabled: false },
    { name: 'HR Round', facultyName: 'Debadrita Nandy', approved: false, rejected: false, disabled: false },
    { name: 'BGC Confirmation', facultyName: 'Jayanta Pal', approved: false, rejected: false, disabled: false },
  ];

  // Handle faculty approval
  approveFaculty(stage: any): void {
   
    this.approvalStage = stage.name;
    stage.approved = true;
    stage.rejected = false;
  }

  // Handle faculty rejection
  rejectFaculty(stage: any): void {
    
    this.isRejected = true;
    stage.approved = false;
    stage.rejected = true;
  }

  saveApproval(): void {
   
    console.log('Approval saved successfully!');
  }
}
