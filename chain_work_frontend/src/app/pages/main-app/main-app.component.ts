import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from '../../reusable/notification/notification.component';

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [RouterOutlet,NotificationComponent],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {

}
