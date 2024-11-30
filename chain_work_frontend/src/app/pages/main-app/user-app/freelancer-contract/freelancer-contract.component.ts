import { Component } from '@angular/core';

@Component({
  selector: 'app-freelancer-contract',
  standalone: true,
  imports: [],
  templateUrl: './freelancer-contract.component.html',
  styleUrl: './freelancer-contract.component.css'
})
export class FreelancerContractComponent {


  onViewDetails(_t12: any) {
    throw new Error('Method not implemented.');
    }
    onRaiseDispute(_t12: any) {
    throw new Error('Method not implemented.');
    }
      metrics = [
        { title: 'Active Contracts', value: 12, trend: '+2 from last month' },
        { title: 'Total Contract Value', value: '$250,000', trend: '+15% from last month' },
        { title: 'Completed Contracts', value: 8, trend: '+3 from last month' },
        { title: 'Disputed Contracts', value: 1, trend: 'No change from last month' }
      ];
    
      contracts = [
        {
          title: 'Senior React Developer',
          company: 'TechCorp',
          value: '$50,000',
          duration: '6/1/2023 - 12/31/2023',
          status: 'Active'
        },
        {
          title: 'UX/UI Designer',
          company: 'DesignHub',
          value: '$25,000',
          duration: '5/15/2023 - 8/15/2023',
          status: 'Active'
        }
      ];

}
