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

  profiles: Array<any> = [
    {
      name: 'Ravi Kumar',
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
    this.showModal = true;
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
