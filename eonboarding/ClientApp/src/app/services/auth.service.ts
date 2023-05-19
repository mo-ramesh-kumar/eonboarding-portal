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
      const t = JSON.parse(localStorage.getItem('token') || '');
      if (t) {
        this.loggedInUserEmail = t.userEmail;
        this.loginType = t.loginType;
        return t.token;
      }
    }
    return false;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }

  getLoginType(): string {
    const t = JSON.parse(localStorage.getItem('token') || '');
    return t.loginType;
  }
}
