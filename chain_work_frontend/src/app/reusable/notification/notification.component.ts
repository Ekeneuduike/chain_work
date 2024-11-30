import { Component } from '@angular/core';
import { NotifictionService } from '../../service/notifiction.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  message: string = '';
  type: 'success' | 'error' | 'info' | '' = '';
  isVisible: boolean = false;
  timeoutId: any;
  constructor(private notificationService: NotifictionService) {}
  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification) => {
      this.message = notification.message;
      this.type = notification.type;
      this.isVisible = true; // Auto-dismiss after 5 seconds
      this.timeoutId = setTimeout(() => {
        this.isVisible = false;
      }, 5000);
    });
  }
  cancelNotification(): void {
    clearTimeout(this.timeoutId);
    this.isVisible = false;
  }
}
