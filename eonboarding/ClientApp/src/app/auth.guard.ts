import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private AuthService: AuthService) {}

  canActivate(): boolean {
    if (this.AuthService.isLoggedIn()) {
      // User is logged in, allow access to the route
      return true;
    } else {
      // User is not logged in, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
