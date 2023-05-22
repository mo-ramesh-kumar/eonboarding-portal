import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent{
  markAsComplete(trainingName: string, event: Event): void {
    const button = event.target as HTMLButtonElement;
    button.innerText = 'Completed';
    button.disabled = true;
    // Add your logic here to handle marking the training as completed
    console.log(`Marking "${trainingName}" as completed...`);
    // You can update your data or perform any other necessary actions
  }

}
