import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {
  profileSearch: string = '';
  showModal = false;
  selectedProfile: any = {};
  isEditable = false;
  profiles: Array<any> = [];
  filteredProfiles: any[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.candidateService.getCandidates().subscribe(
      (data) => {
        this.profiles = data;
        this.filteredProfiles = data; // Initialize filteredProfiles with all profiles initially
      },
      (error) => {
        console.log('Error fetching candidates:', error);
      }
    );
  }

  onProfileSearch() {
    if (this.profileSearch) {
      this.filteredProfiles = this.profiles.filter((profile) =>
        profile.name.toLowerCase().includes(this.profileSearch.toLowerCase())
      );
    } else {
      this.filteredProfiles = this.profiles;
    }
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
