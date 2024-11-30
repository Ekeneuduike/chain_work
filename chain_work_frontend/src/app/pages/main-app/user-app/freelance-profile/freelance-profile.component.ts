import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChangeDetectionStrategy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from '../../../../reusable/file-uploader/file-uploader.component';
import { ProgressBarComponent } from '../../../../reusable/progress-bar/progress-bar.component';
import { ServerService } from '../../../../service/server.service';
// import { File } from 'buffer';

Chart.register(...registerables);

@Component({
  selector: 'app-freelance-profile',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FileUploaderComponent,
    MatProgressBarModule,
    ProgressBarComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './freelance-profile.component.html',
  styleUrl: './freelance-profile.component.css',
})
export class FreelanceProfileComponent implements AfterViewInit {
  server = inject(ServerService);

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event): void {
    this.showSuggestions = false;
  }

  progress: number = 1;

  project = {
    title: '',
    description: '',
    technologies: [],
    fileName: '',
  };

  availableTechnologies = [
    'JavaScript',
    'Python',
    'Angular',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Java',
    'Rust',
  ];
  tech: string[] = [];
  typed_tech = '';
  filteredTech: string[] = this.availableTechnologies;
  onSubmit() {
    console.log('Project Saved:', this.project);
    alert('Project saved successfully!');
    // Add logic to save project to the backend or state.
  }

  filterTechs(): void {
    const input = this.typed_tech.toLowerCase();
    console.log('hello tech input', input);
    this.filteredTech = this.availableTechnologies.filter(
      (tech) => tech.toLowerCase().includes(input) && !this.tech.includes(tech)
    );
    this.showSuggestions = this.filteredTech.length > 0;
  }

  addTech(tech: string): void {
    if (tech.trim() && !this.tech.includes(tech)) {
      this.tech.push(tech.trim());
    }
    this.typed_tech = '';
    this.filterTechs();
  }

  removeTech(tech: string): void {
    this.tech = this.tech.filter((s) => s !== tech);
    this.filterTechs();
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.project.fileName = file.name;
    }
  }

  removeFile() {
    this.project.fileName = '';
  }

  onCancel() {
    // Logic to handle cancel, such as navigating back or resetting the form
    // reset forma and close
    alert('Form canceled.');
  }

  skills: string[] = [];
  allSkills: string[] = [
    'JavaScript',
    'Python',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'Java',
    'Rust',
    'React',
  ];

  filteredSkills: string[] = this.allSkills;
  skillInput: string = '';
  showSuggestions: boolean = false;

  filterSkills(): void {
    const input = this.skillInput.toLowerCase();
    console.log('hello skills input', input);

    this.filteredSkills = this.allSkills.filter(
      (skill) =>
        skill.toLowerCase().includes(input) && !this.skills.includes(skill)
    );
    this.showSuggestions = this.filteredSkills.length > 0;
  }

  addSkill(skill: string): void {
    if (skill.trim() && !this.skills.includes(skill)) {
      this.skills.push(skill.trim());
    }
    this.skillInput = '';
    this.filterSkills();
  }

  removeSkill(skill: string): void {
    this.skills = this.skills.filter((s) => s !== skill);
    this.filterSkills();
  }

  handleContainerClick(event: Event): void {
    event.stopPropagation();
  }

  changeSkills() {
    throw new Error('Method not implemented.');
  }
  changeBio() {
    this.server.changeBio(this.bio());
  }
  changeProfileImage() {
    this.server.changeProfileImage(this.selectedFile);
  }
  changeJobTitle() {
    this.server.updateJobTitle(this.jobTitle());
  }
  changeFullname() {
    this.server.changeUser(this.fullname());
  }

  change: string = 'Full Name';
  profile_image = false;
  full_name = false;
  job_title = false;
  open_bio = false;
  edit_skills = false;
  add_portfolio_project = false;
  edit_project = false;
  closeform() {
    let doc = document.getElementById('form-back');
    if (doc) {
      doc.style.display = 'none';
    }
    this.profile_image = false;
    this.full_name = false;
    this.job_title = false;
    this.open_bio = false;
    this.edit_skills = false;
    this.add_portfolio_project = false;
    this.edit_project = false;
    this.selectedFile = null;
  }
  selectedFile: File | null = null;
  onFileSelected(file: File): void {
    this.selectedFile = file;
    console.log('File selected in parent component:', file.name);
  }

  fullname = signal<string>('');
  jobTitle = signal<string>('');
  bio = signal<string>('');
  // here we edit user info
  ngAfterViewInit(): void {
    const ctx = document.getElementById('user-chart') as HTMLCanvasElement;
    if (ctx) {
      this.chart = new Chart(ctx, this.config);
      console.log('Chart created successfully');
    } else {
      console.error('Failed to find canvas element');
    }
  }

  longText = '';

  editProfile(arg0: string) {
    let doc = document.getElementById('form-back');
    if (doc) {
      doc.style.display = 'flex';
    }
    if (arg0 == 'image') {
      this.change = 'Profile Image';
      this.profile_image = true;
    } else if (arg0 == 'username') {
      this.change = 'Full Name';
      this.full_name = true;
    } else if (arg0 == 'title') {
      this.change = 'Job Title';
      this.job_title = true;
    } else if (arg0 == 'bio') {
      this.change = 'Bio';
      this.open_bio = true;
    } else if (arg0 == 'skills') {
      this.edit_skills = true;
    } else if (arg0 == 'portfolio') {
      this.add_portfolio_project = true;
    } else if (arg0 == 'edit_project') {
      this.edit_project = true;
    }
  }
  active = input.required<string>();
  isSidenavVisible = false;
  toggleSidenav() {
    this.isSidenavVisible = !this.isSidenavVisible;
  }

  closeSidenav() {
    this.isSidenavVisible = false;
  }

  public config: any = {
    type: 'bar',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Monthly Earnings',
          data: [
            1500, 2000, 2500, 4500, 3000, 6000, 1500, 2000, 2500, 3000, 3500,
            5000,
          ],
          backgroundColor: '#bada55',
        },
      ],
    },
    options: { responsive: true },
  };

  chart: any;

  totalEarnings = 45231.89;
  activeContracts = 2350;
  pendingProposals = 12234;
  activeChats = 573;
  monthlyEarnings = [
    1500, 2000, 2500, 4500, 3000, 6000, 1500, 2000, 2500, 3000, 3500, 5000,
  ];
  recentProposals = [
    {
      name: 'Olivia Martin',
      project: 'Web Development Project',
      amount: 1999.0,
    },
    { name: 'Jackson Lee', project: 'Mobile App Design', amount: 39.0 },
    {
      name: 'Isabella Nguyen',
      project: 'UI/UX Design for E-commerce',
      amount: 299.0,
    },
    { name: 'William Kim', project: 'Backend Development', amount: 99.0 },
    { name: 'Sofia Davis', project: 'Data Analysis Project', amount: 39.0 },
  ];

  disputes = [
    {
      id: 1,
      title: 'Order Not Delivered',
      status: 'Pending',
      date: '2024-11-01',
      description: 'The order was not delivered on time as promised.',
    },
    {
      id: 2,
      title: 'Item Damaged',
      status: 'Resolved',
      date: '2024-11-10',
      description: 'The item received was damaged and unusable.',
    },
    {
      id: 3,
      title: 'Wrong Item Sent',
      status: 'Pending',
      date: '2024-11-20',
      description: 'I received a different item than what I ordered.',
    },
  ];

  selectedDispute: any = null;

  selectDispute(dispute: any) {
    this.selectedDispute = dispute;
  }
}
