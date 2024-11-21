import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent {
  searchTerm: string = '';
  selectedCategory: string = '';
  sortOption: string = 'latest';

  // Dummy job data
  jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      category: 'Development',
      description: 'Looking for a skilled Angular developer to join our team.',
      postedDate: new Date('2024-11-10')
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Design Studio',
      category: 'Design',
      description: 'Experienced designer needed for branding projects.',
      postedDate: new Date('2024-11-15')
    },
    {
      id: 3,
      title: 'Project Manager',
      company: 'Enterprise Inc.',
      category: 'Management',
      description: 'Organize and oversee client projects to ensure success.',
      postedDate: new Date('2024-11-08')
    }
  ];

  jobCategories = ['Development', 'Design', 'Management'];
  filteredJobs = [...this.jobs];

  filterJobs() {
    this.filteredJobs = this.jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            job.company.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || job.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    this.sortJobs();
  }

  sortJobs() {
    this.filteredJobs.sort((a, b) => {
      if (this.sortOption === 'latest') {
        return b.postedDate.getTime() - a.postedDate.getTime();
      } else {
        return a.postedDate.getTime() - b.postedDate.getTime();
      }
    });
  }

  viewDetails(jobId: number) {
    console.log(`View details for job ID: ${jobId}`);
    // Implement navigation to job details page
  }

  applyToJob(jobId: number) {
    console.log(`Apply to job ID: ${jobId}`);
    // Implement job application logic
  }

}
