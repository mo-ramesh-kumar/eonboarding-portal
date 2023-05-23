import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidate-enrollment',
  templateUrl: './candidate-enrollment.component.html',
  styleUrls: ['./candidate-enrollment.component.css']
})
export class CandidateEnrollmentComponent {
  resume: File | null = null;
  previewResume: SafeResourceUrl | null = null;
  showPopup = false;

  candidateDetails: any = {
    name: '',
    dob: '',
    nationality: '',
    gender: '',
    email: '',
    phone: '',
    school: '',
    schoolPercentage: null,
    college: '',
    collegePercentage: null,
    company: '',
    technology: '',
    skills: '',
    postCollege: '',
    postCollegePercentage: ''
  };

  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal) { }

  handleFileChange(event: any) {
    const file = event.target.files[0];
    this.resume = file;
    this.previewResume = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));


    // Resume data extraction (example only, not a complete solution)
    this.extractResumeData(file);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {

      },
      (reason) => {

      },
    );
  }

  extractResumeData(file: File) {
    // Simulated resume data extraction
    // Replace this code with an actual resume parsing solution
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const resumeData = event.target.result;
      this.populateFieldsFromResume(resumeData);
    };
    reader.readAsText(file);
  }

  populateFieldsFromResume(resumeData: any) {
    // Simulated data population (example only, not a complete solution)
    // Replace this code with your resume parsing logic
    this.candidateDetails.name = 'Megha Chawdhary';
    this.candidateDetails.dob = '1990-05-15';
    this.candidateDetails.nationality = 'Indian';
    this.candidateDetails.gender = 'female';
    this.candidateDetails.email = 'megha.chawdhary@mail.com';
    this.candidateDetails.phone = '8668699664';
    this.candidateDetails.school = 'ABC School';
    this.candidateDetails.schoolPercentage = 80;
    this.candidateDetails.college = 'XYZ College';
    this.candidateDetails.collegePercentage = 85;
    this.candidateDetails.company = 'XYZ Inc.';
    this.candidateDetails.technology = 'Angular, React, Node.js';
    this.candidateDetails.skills = 'JavaScript, HTML, CSS';
    this.candidateDetails.postCollege = 'Sastra University';
    this.candidateDetails.postCollegePercentage = 80;
  }

  handleSave() {
    // Perform save operation here (e.g., send data to the server)
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
