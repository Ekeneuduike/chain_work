import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Server } from 'http';
import { ServerService } from '../../../../service/server.service';
import { ContractService } from '../../../../service/contract.service';
import { Talent } from '../../../../interfaces/Objects';
import { NotifictionService } from '../../../../service/notifiction.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  server = inject(ServerService);
  client = inject(ContractService)
  notifiction = inject(NotifictionService);
  talent!:Talent;
  ngOnInit(): void {
    console.log(`hello who got my back ${this.client.getUserAddr()}`)
   this.server.getTalent(this.client.getUserAddr()).subscribe(
    (data)=>{
      if(!data){
        this.notifiction.showNotification('Please to find Jobs complete your profile','info')
      }
    },
 
    (error:any)=>{
      console.log("an error occured",error);
      
      if(error.status == 404){
        this.notifiction.showNotification('Please to find Jobs complete your profile','info')
      }
      else {
        this.notifiction.showNotification(`Error! something went wrong ${error.error.message}`,'info')
        console.log('here is the error',error);


      }
      
    }
   )
  }
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









  // jobCategories = ['Development', 'Design', 'Management'];
  // filteredJobs = [...this.jobs];

  // filterJobs() {
  //   this.filteredJobs = this.jobs.filter((job) => {
  //     const matchesSearch = job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //                           job.company.toLowerCase().includes(this.searchTerm.toLowerCase());
  //     const matchesCategory = !this.selectedCategory || job.category === this.selectedCategory;
  //     return matchesSearch && matchesCategory;
  //   });
  //   this.sortJobs();
  // }

  // sortJobs() {
  //   this.filteredJobs.sort((a, b) => {
  //     if (this.sortOption === 'latest') {
  //       return b.postedDate.getTime() - a.postedDate.getTime();
  //     } else {
  //       return a.postedDate.getTime() - b.postedDate.getTime();
  //     }
  //   });
  // }

  // viewDetails(jobId: number) {
  //   console.log(`View details for job ID: ${jobId}`);
  //   // Implement navigation to job details page
  // }

  // applyToJob(jobId: number) {
  //   console.log(`Apply to job ID: ${jobId}`);
  //   // Implement job application logic
  // }