import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  otp: string = '';
  isOTPSent: boolean = false;
  error: string = '';
  loginType: string = 'candidate'; // Set the default login type to 'candidate'
  adminCode: string = ''; // Add the adminCode property
  generatedOTP: number = 0; // Variable to store the generated OTP
  // message: string = '';

  constructor(private http: HttpClient, private router: Router, private AuthService: AuthService,  private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     this.message = params['message'] || '';
  //   });
  // }
  
  handleSendOTP() {
    this.generatedOTP = Math.floor(Math.random() * 900000) + 100000; // Generate OTP
    console.log('OTP sent:', this.generatedOTP); // Display the generated OTP in the console

    this.isOTPSent = true;
    this.error = '';
  }

  handleLogin() {
    if (this.loginType === 'admin') {
      const adminEmail = 'admin@example.com';
      const adminOTP = '123456';
  
      if (this.email === adminEmail && this.otp === adminOTP) {
        console.log('Admin login successful');
        this.AuthService.login(this.email, this.loginType); // Call the login method from AuthService
        this.router.navigate(['/home']); // Redirect to the home page on successful login
      } else {
        this.error = 'Invalid admin credentials. Please try again.';
      }
      // Handle admin login logic
      // this.http.post('https://jsonplaceholder.typicode.com/posts', { email: this.email, adminCode: this.adminCode }).subscribe(
      //   (response: any) => {
      //     if (response && response.success) {
      //       console.log('Admin login successful');
      //       this.AuthService.login(this.email); // Call the login method from AuthService
      //       this.router.navigate(['/home']); // Redirect to the home page on successful login
      //     } else {
      //       this.error = 'Invalid admin credentials. Please try again.';
      //     }
      //   },
      //   () => {
      //     this.error = 'An error occurred while processing your request. Please try again later.';
      //   }
      // );
    } else if (this.loginType === 'candidate') {
      if (this.isOTPSent && this.otp) {
        const enteredOTP = parseInt(this.otp, 10); // Parse the entered OTP as an integer
  
        if (enteredOTP === this.generatedOTP) { // Compare entered OTP with generated OTP
          console.log('Candidate login successful');
          this.AuthService.login(this.email, this.loginType); // Call the login method from AuthService
          this.router.navigate(['/home']); // Redirect to the home page on successful login
        } else {
          this.error = 'Invalid OTP. Please try again.';
        }
      } else {
        this.error = 'Please enter the OTP.';
      }
    }
  }
  
}
