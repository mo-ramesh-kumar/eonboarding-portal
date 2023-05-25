import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent {
  profileSearch: string = '';
  showModal = false;
  selectedProfile: any = {};
  isEditable = false;

  profiles: Array<any> = [
    {
      name: 'Megha Chawdhary',
      email: 'ravi.kumar@test.com',
      id: 1
    },
    {
      name: 'Priya Sharma',
      email: 'priya.sharma@test.com',
      id: 2
    },
    {
      name: 'Amit Patel',
      email: 'amit.patel@test.com',
      id: 3
    },
    {
      name: 'Sneha Verma',
      email: 'sneha.verma@test.com',
      id: 4
    },
    {
      name: 'Rajesh Singh',
      email: 'rajesh.singh@test.com',
      id: 5
    }
  ];

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

  constructor() {
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

  get filteredProfiles(): Array<any> {
    if (!this.profileSearch) {
      return this.profiles;
    }
    return this.profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(this.profileSearch.toLowerCase()) ||
        profile.email.toLowerCase().includes(this.profileSearch.toLowerCase())
    );
  }

  editProfile(id: number) {
    this.isEditable = true;
    this.selectedProfile = { ...this.profiles.find((item) => item.id === id) };
  }

  saveProfile() {
    const index = this.profiles.findIndex((item) => item.id === this.selectedProfile.id);
    if (index !== -1) {
      this.profiles[index] = { ...this.selectedProfile };
    }
    this.showModal = false;
  }
}
