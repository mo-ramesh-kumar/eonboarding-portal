import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  candidate = {
    editingProfile: true,
    documentSubmission: false,
    trainings: false
  };

}
