import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { once } from 'events';

@Component({
  selector: 'app-client-app',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterModule, CommonModule],
  templateUrl: './client-app.component.html',
  styleUrl: './client-app.component.css',
})
export class ClientAppComponent {
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
