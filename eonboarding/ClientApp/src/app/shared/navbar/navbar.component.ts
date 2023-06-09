import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUserEmail: string = '';
  @ViewChild(NotificationComponent, { static: false })
  notificationComponent!: ElementRef<NotificationComponent>;
  notificationCount: number = 0; // Number of notifications 

  constructor(
    private authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
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

  open() {
    this.modalService.open(NotificationComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {

      },
      (reason) => {

      },
    );
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    // Call the logout method from the AuthService
    this.router.navigate(['/login']); // Redirect to the login page with a query parameter for the message   
  }

  updateNotificationCount() {
    if (this.notificationComponent && this.notificationComponent.nativeElement) {
      this.notificationCount = this.notificationComponent.nativeElement.getNotificationCount();
      this.changeDetectorRef.detectChanges(); // Manually trigger change detection
    }
  }
}
