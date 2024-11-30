import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-health-circle',
  standalone: true,
  imports: [],
  templateUrl: './health-circle.component.html',
  styleUrl: './health-circle.component.css'
})
export class HealthCircleComponent {

  @Input() health: number = 100; // Default health value

  // Calculate stroke dasharray for the foreground circle based on health
  get circleDashArray(): string {
    const circumference = 2 * Math.PI * 50; // Circumference of the circle (2 * π * radius)
    const dashLength = (this.health / 100) * circumference;
    return `${dashLength} ${circumference}`;
  }

  // Dynamically change the color of the circle
  get circleColor(): string {
    return this.health < 20 ? 'red' : '#4caf50'; // Red if health < 20, green otherwise
  }

}
