import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loginType: string = '';

  candidateNavItems = [
    {
      title: 'Home',
      url: '/home',
      isSelected: false,
      css: 'fas fa-home',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'Your Application',
      url: '/your-application',
      isSelected: false,
      css: 'fas fa-file-edit',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'Document Center',
      url: '/onboarding-documents',
      isSelected: false,
      css: 'fas fa-chevron-down',
      order: 0,
      subItems: [
        {
          title: 'Generate Digital Signature',
          url: '/generate-digital-signature',
          isSelected: false,
          css: 'fas fa-tasks',
          order: 0,
        },
        {
          title: 'Employee NDA',
          url: '/assets/documents/Employee NDA.pdf',
          isSelected: false,
          css: 'fas fa-file-pdf',
          order: 0,
        },
        {
          title: 'Leave Policy and Holiday',
          url: '/assets/documents/Moback IDC - Leave, Working Hours and Holiday Policy - 13th April 2021.pdf',
          isLink: true,
          isSelected: false,
          css: 'fas fa-file-pdf',
          order: 0,
        },
        {
          title: 'Employee Handbook',
          url: '/assets/documents/Moback-IDC-Employee-HandBook-R2.0.pdf',
          isLink: true,
          isSelected: false,
          css: 'fas fa-file-pdf',
          order: 0,
        }
      ]
    },
    {
      title: 'Trainings',
      url: '/trainings',
      isSelected: false,
      css: 'fas fa-briefcase',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'Benefits',
      url: '/benefits',
      isSelected: false,
      css: 'fas fa-tasks',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'About Us',
      url: '/about-us',
      isSelected: false,
      css: 'fas fa-home',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'Company Culture',
      url: '/company-culture',
      isSelected: false,
      css: 'fas fa-globe',
      order: 0,
      subItems: [
       
      ]
    }
  ]

  adminNavItems = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      isSelected: true,
      css: 'fas fa-home',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'Profile Management',
      url: '/profile-management',
      isSelected: false,
      css: 'fas fa-user-cog',
      order: 0,
      subItems: [
       
      ]
    },
    {
      title: 'Onboarding Checklist',
      url: '/onboarding-checklist',
      isSelected: false,
      css: 'fas fa-list-check',
      order: 0,
      subItems: [
       
      ]
    },
    // {
    //   title: 'Document Center',
    //   url: '/document-Center',
    //   isSelected: false,
    //   css: 'fas fa-file-alt',
    //   order: 0,
    //   subItems: [
    //     {
    //       title: 'Faculty Contract Agreement',
    //       url: '/assets/documents/Faculty Contract Agreement.pdf',
    //       isLink: true,
    //       isSelected: false,
    //       css: 'fas fa-file-pdf',
    //       order: 0,
    //     },
    //     {
    //       title: 'Code of Conduct',
    //       url: '/assets/documents/Code of Conduct.pdf',
    //       isLink: true,
    //       isSelected: false,
    //       css: 'fas fa-file-pdf',
    //       order: 0,
    //     },
    //     {
    //       title: 'Policies and Procedures Manual',
    //       url: '/assets/documents/Policies and Procedures Manual.pdf',
    //       isLink: true,
    //       isSelected: false,
    //       css: 'fas fa-file-pdf',
    //       order: 0,
    //     }
    //   ]
    // }
     {
      title: 'Admin Center',
      url: '/admin-Center',
      isSelected: false,
      css: 'fas fa-user-cog',
      order: 0,
      subItems: [
        {
          title: 'Candidate Enrollment',
          url: '/candidate-enrollment',
          isSelected: false,
          isLink: false,
          css: 'fas fa-user-cog',
          order: 0,
        },
        {
          title: 'Document review',
          url: '/document-review',
          isSelected: false,
          isLink: false,
          css: 'fas fa-clipboard-check',
          order: 0,
        },
        {
          title: 'Offer letter generation',
          url: '/offer-letter-generation',
          isSelected: false,
          isLink: false,
          css: 'fas fa-file-signature',
          order: 0,
        },
        // {
        //   title: 'Profile Review',
        //   url: '/profile-review',
        //   isSelected: false,
        //   isLink: false,
        //   css: 'fas fa-thumbs-up',
        //   order: 0,
        // }
      ]
    }    
  ]

  constructor(private AuthService: AuthService) {

  }

  ngOnInit(): void {
    this.loginType = this.AuthService.getLoginType();
  }

  getIcon(item: any){
    return item.css;
  }

  setNavSelection(item: any){

    this.adminNavItems.map(item => item.isSelected = false);
    this.candidateNavItems.map(item => item.isSelected = false);

    item.isSelected = true;
  }
}
