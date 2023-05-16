import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
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
      event.preventDefault(); // Prevent the default link behavior
      // Add your logic here for displaying the notifications or opening a notifications panel
      // You can call incrementNotificationCount() to increase the count when a new notification is added
      // You can also call resetNotificationCount() to reset the count when the user clicks on the notifications link
    });
  }
  }

  login() {
    // this.authService.login();
    this.isLoggedIn = true;
  }

  logout() {
    // this.authService.logout();
    this.isLoggedIn = false;
  }

}
