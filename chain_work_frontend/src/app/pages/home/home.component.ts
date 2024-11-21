import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentYear: number = new Date().getFullYear();

  features = [
    {
      icon: 'assets/icons/milestone.svg',
      title: 'Milestone-Based Payments',
      description: 'Secure payments released only upon project completion.'
    },
    {
      icon: 'assets/icons/loan.svg',
      title: 'Loan Assistance',
      description: 'Get under-collateralized loans to start your project.'
    },
    {
      icon: 'assets/icons/trust.svg',
      title: 'Built-in Trust',
      description: 'Transparent contracts to ensure fairness for all parties.'
    }
  ];

  testimonials = [
    {
      quote: 'This platform transformed how I work with clients!',
      author: 'Jane Doe, Freelancer'
    },
    {
      quote: 'Milestone-based payments have never been this easy.',
      author: 'John Smith, Client'
    }
  ];

  navigateTo(section: string) {
    // Add routing logic
    console.log(`Navigate to ${section}`);
  }

}
