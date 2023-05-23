import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-application',
  templateUrl: './your-application.component.html',
  styleUrls: ['./your-application.component.css']
})
export class YourApplicationComponent implements OnInit {
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
  constructor() { }
  candidate = {
    editingProfile: true,
    documentSubmission: false,
    trainings: false
  };
  ngOnInit(): void {
    this.populateFieldsFromResume(null);
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

  handleSave(){
    
  }
}
