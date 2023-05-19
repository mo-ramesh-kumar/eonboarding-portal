import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent {
  profileSearch: string = "";
  showModal = false;
  selectedProfile: any = {};
  constructor() { }

  profiles: Array<any> = [{
    name: 'Ram',
    email: 'ram@test.com',
    candidateId: 1
  },
  {
    name: 'Ram',
    email: 'ram@test.com',
    id: 1
  },
  {
    name: 'Ram',
    email: 'ram@test.com',
    id: 1
  },
  {
    name: 'Ram',
    email: 'ram@test.com',
    id: 2
  }];

  editProfile(id: number) {
    // Here you can implement the logic to save the profile data
    this.showModal = true;
    this.selectedProfile = this.profiles.find(item => item.id == id);
  }

  saveProfile() {
    this.showModal = false;
  }
}
