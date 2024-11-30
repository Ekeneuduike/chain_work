import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, RouterOutlet } from '@angular/router';
import { NotificationComponent } from '../../../reusable/notification/notification.component';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterModule,CommonModule],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent {
  
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
