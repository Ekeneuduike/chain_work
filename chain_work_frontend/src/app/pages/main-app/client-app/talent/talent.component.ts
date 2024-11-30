import { Component } from '@angular/core';

@Component({
  selector: 'app-talent',
  standalone: true,
  imports: [],
  templateUrl: './talent.component.html',
  styleUrl: './talent.component.css'
})
export class TalentComponent {
  
  talents = [
    {
      name: 'Jane Doe',
      title: 'Full Stack Developer',
      skills: ['JavaScript', 'Angular', 'Node.js'],
      hourlyRate: '$50/hr',
      profileImage: 'https://via.placeholder.com/80',
    },
    {
      name: 'John Smith',
      title: 'UX/UI Designer',
      skills: ['Adobe XD', 'Figma', 'Photoshop'],
      hourlyRate: '$40/hr',
      profileImage: 'https://via.placeholder.com/80',
    },
    {
      name: 'Alice Johnson',
      title: 'Data Scientist',
      skills: ['Python', 'Machine Learning', 'Pandas'],
      hourlyRate: '$70/hr',
      profileImage: 'https://via.placeholder.com/80',
    }
  ];
}
