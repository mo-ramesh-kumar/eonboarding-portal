import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent {

  constructor() { }

  profile: any = {
    name: '',
    email: ''
  };

  saveProfile() {
    // Here you can implement the logic to save the profile data
    console.log('Profile saved:', this.profile);
  }
}
