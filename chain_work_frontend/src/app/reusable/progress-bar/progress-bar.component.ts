import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  @Input() progress: number = 0; // Input property to set progress dynamically

  getColor(): string {
    return '#0D6EFD'
    if (this.progress < 30) {
      return '#dc3545'; // Red
    } else if (this.progress < 70) {
      return '#ffc107'; // Yellow
    } else {
      return '#28a745'; // Green
    }
  }

}
