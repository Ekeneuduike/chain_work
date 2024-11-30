import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.css'
})
export class ProposalComponent {


  statistics = [
    { title: 'Total Proposals', count: 25, trend: '+10% from last month' },
    { title: 'Approved Proposals', count: 8, trend: '+20% from last month' },
    { title: 'Pending Proposals', count: 12, trend: '-5% from last month' },
    { title: 'Rejected Proposals', count: 5, trend: '+2 from last month' }
  ];

  proposals = [
    {
      title: 'Senior React Developer',
      company: 'TechCorp',
      bidAmount: '$120/hr',
      submissionDate: '6/15/2023',
      status: 'Pending'
    },
    {
      title: 'UX/UI Designer',
      company: 'DesignHub',
      bidAmount: '$100/hr',
      submissionDate: '6/14/2023',
      status: 'Approved'
    }
  ];
  
}
