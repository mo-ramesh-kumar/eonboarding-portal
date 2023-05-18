import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loginType: string = '';

  constructor(private AuthService: AuthService) {

  }

  ngOnInit(): void {   
    this.loginType = this.AuthService.getLoginType();
  }

}
