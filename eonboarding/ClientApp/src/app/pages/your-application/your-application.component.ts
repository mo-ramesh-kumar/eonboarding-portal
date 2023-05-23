import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-application',
  templateUrl: './your-application.component.html',
  styleUrls: ['./your-application.component.css']
})
export class YourApplicationComponent implements OnInit {

  constructor() { }
  candidate = {
    editingProfile: true,
    documentSubmission: false,
    trainings: false
  };
  ngOnInit(): void {
  }

}
