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
      title: "Faculty Management Onboarding",
      message: "Welcome to the Faculty Management System! Please complete the onboarding process to get started."
    },
    {
      title: "Company Update",
      message: "We have exciting news to share! The company has reached a milestone this quarter."
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
