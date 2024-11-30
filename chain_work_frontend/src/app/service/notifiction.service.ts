import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotifictionService {
  constructor() {}

  private notificationSubject = new Subject<{
    message: string;
    type: 'success' | 'error' |'info';
  }>();
  notification$ = this.notificationSubject.asObservable();
  showNotification(message: string, type: 'success' | 'error' | 'info') {
    this.notificationSubject.next({ message, type });
  }
}
