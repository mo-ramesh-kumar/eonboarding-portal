import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-approval',
  templateUrl: './faculty-approval.component.html',
  styleUrls: ['./faculty-approval.component.css']
})
export class FacultyApprovalComponent {
  isApproved: boolean = false;

  approveFaculty(): void {
    // Logic to approve faculty
    this.isApproved = true;
  }

  rejectFaculty(): void {
    // Logic to reject faculty
    this.isApproved = false;
  }
}
