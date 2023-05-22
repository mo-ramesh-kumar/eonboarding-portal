import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Output() notificationClosed: EventEmitter<void> = new EventEmitter<void>();

  notifications: { title: string, message: string }[] = [
    {
      title: "Start Process",
      message: "Welcome to the Faculty Management System! Please complete the onboarding process to get started."
    },
    {
      title: "Company Update",
      message: "We have exciting news to share! The company has reached a milestone this quarter."
    },
    {
      title: "New Feature Released",
      message: "We have added a new feature to enhance your experience. Check it out now!"
    },
    {
      title: "Upcoming Maintenance",
      message: "Scheduled maintenance is planned for tomorrow. Please be prepared for temporary service disruptions."
    },
    {
      title: "Important Announcement",
      message: "There will be a mandatory meeting for all employees next week. Please mark your calendars."
    },
    {
      title: "Product Update",
      message: "A new version of our product is now available. Update now to access the latest features and improvements."
    }
    // Add more notifications as needed
  ];
  

  currentNotificationIndex: number = 0;

  getCurrentNotification(): { title: string, message: string } {
    return this.notifications[this.currentNotificationIndex];
  }

  closeNotification() {
    this.notificationClosed.emit();
    this.currentNotificationIndex++;
  }

  getNotificationCount(): number {
    return this.notifications.length - this.currentNotificationIndex;
  }
}
