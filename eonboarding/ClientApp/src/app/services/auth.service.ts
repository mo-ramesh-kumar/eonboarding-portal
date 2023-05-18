import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInFlag: boolean = false;
  private loggedInUserEmail: string = '';
  private loginType = '';

  constructor() { }

  login(userEmail: string, loginType: string) {
    this.isLoggedInFlag = true;

    this.loggedInUserEmail = userEmail;
    this.loginType = loginType;
    localStorage.setItem('token', JSON.stringify({
      token: true,
      userEmail: userEmail,
      loginType: loginType
    }));
  }

  logout() {
    this.isLoggedInFlag = false;
    localStorage.setItem('token', 'null');
    this.loggedInUserEmail = '';
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      var t = JSON.parse(localStorage.getItem('token') || '');
      this.loggedInUserEmail = t.userEmail;
      this.loginType = t.loginType;
      return t.token;
    }
    return false;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }

  getLoginType(): string {
    return this.loginType;
  }
}