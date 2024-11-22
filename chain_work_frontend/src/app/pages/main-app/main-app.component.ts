import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {

}
