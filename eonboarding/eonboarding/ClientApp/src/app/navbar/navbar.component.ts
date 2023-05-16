import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUserEmail: string = '';
  constructor(private AuthService: AuthService, private router:Router) {
  }

  ngOnInit(): void {
    // Check if the user is already logged in
    this.isLoggedIn = this.AuthService.isLoggedIn();
    this.loggedInUserEmail = this.AuthService.getLoggedInUserEmail();
   var notificationBadge = document.querySelector('.notification-badge') as HTMLElement;
  var notificationCount = 0;

  // Function to increment the notification count and update the badge
  function incrementNotificationCount() {
    notificationCount++;
    notificationBadge.textContent = notificationCount.toString();
  }

  // Function to reset the notification count to zero
  function resetNotificationCount() {
    notificationCount = 0;
    notificationBadge.textContent = notificationCount.toString();
  }

  // Event listener for the notifications link
  var notificationsLink = document.querySelector('.notifications');
  if (notificationsLink !== null) {
    notificationsLink.addEventListener('click', function(event) {
      event.preventDefault(); 
    });
  }
  }

  logout() {
    this.AuthService.logout();
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    // Call the logout method from the AuthService
    this.router.navigate(['/login']); // Redirect to the login page with a query parameter for the message
  }

}
