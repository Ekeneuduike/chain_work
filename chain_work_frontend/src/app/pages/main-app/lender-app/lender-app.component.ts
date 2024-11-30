import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lender-app',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './lender-app.component.html',
  styleUrl: './lender-app.component.css'
})
export class LenderAppComponent {

  closeNotification() {}
  unread: boolean = true;

  isVisible: boolean = false;

  triggerNotification() {
    if (this.isVisible) {
      this.toogleNotification();
    } else {
      this.isVisible = true;
    }
  }

  // Method to hide the notification
  toogleNotification() {
    this.isVisible = !this.isVisible;
  }

  notifications = [
    {
      topic: 'Success Notification',
      message: 'The operation was completed successfully.',
      timestamp: new Date(),
      type: 'success',
    },
    {
      topic: 'Error Notification',
      message: 'Something went wrong, please try again.',
      timestamp: new Date(),
      type: 'error',
    },
    {
      topic: 'Info Notification',
      message: 'There is a new update available for your app.',
      timestamp: new Date(),
      type: 'info',
    },
  ];
  

}
