import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInFlag: boolean = false;
  private loggedInUserEmail: string = '';
  private loginType = '';

  constructor() {}

  login(userEmail: string, loginType: string) {
    this.isLoggedInFlag = true;
    this.loggedInUserEmail = userEmail;
    this.loginType = loginType;
  }

  logout() {
    this.isLoggedInFlag = false;
    this.loggedInUserEmail = '';
  }

  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }

  getLoginType(): string {
    return this.loginType;
  }
}