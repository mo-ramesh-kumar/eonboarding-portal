import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isLoggedIn: boolean = false;
  loggedInUserEmail: string = '';
  @ViewChild(NotificationComponent)
  notificationComponent!: NotificationComponent;
  notificationCount: number = 0; // Number of notifications

  constructor(
    private authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    // Check if the user is already logged in
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
    this.updateNotificationCount(); // Call the method to update the notification count
  }

  handleNotificationClosed() {
    // Logic to handle the notification being closed
    // For example, you can update a flag or perform any other actions
    this.notificationCount--;
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    // Call the logout method from the AuthService
    this.router.navigate(['/login']); // Redirect to the login page with a query parameter for the message
  }

  updateNotificationCount() {
    this.notificationCount = this.notificationComponent.getNotificationCount();
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection
  }
}
