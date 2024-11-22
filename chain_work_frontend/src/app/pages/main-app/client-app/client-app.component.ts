import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client-app.component.html',
  styleUrl: './client-app.component.css'
})
export class ClientAppComponent {
  searchQuery = ''; // Search bar binding
  filters = { type: '', location: '', experience: '' }; // Filters binding

  // Example jobs list
  jobs = [
    {
      title: 'Frontend Developer',
      description: 'Build amazing web applications.',
      location: 'New York',
      type: 'Full-Time',
      experience: 'Mid',
      date: 'Posted 2 days ago'
    },
    {
      title: 'Backend Engineer',
      description: 'Develop robust server-side logic.',
      location: 'San Francisco',
      type: 'Full-Time',
      experience: 'Senior',
      date: 'Posted 5 days ago'
    },
    {
      title: 'UI/UX Designer',
      description: 'Design visually appealing interfaces.',
      location: 'Remote',
      type: 'Freelance',
      experience: 'Entry',
      date: 'Posted 1 week ago'
    },
    {
      title: 'Full Stack Developer',
      description: 'Handle both frontend and backend.',
      location: 'Austin',
      type: 'Part-Time',
      experience: 'Mid',
      date: 'Posted 1 day ago'
    }
  ];

  // Filtered jobs list
  get filteredJobs() {
    return this.jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesType = this.filters.type ? job.type === this.filters.type : true;
      const matchesLocation = this.filters.location
        ? job.location.toLowerCase().includes(this.filters.location.toLowerCase())
        : true;
      const matchesExperience = this.filters.experience ? job.experience === this.filters.experience : true;

      return matchesSearch && matchesType && matchesLocation && matchesExperience;
    });
  }
}
