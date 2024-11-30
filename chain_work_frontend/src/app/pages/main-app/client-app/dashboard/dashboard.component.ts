import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit {



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
            1500, 2000, 2500, 4500, 3000, 6000, 1500, 2000, 2500, 3000,
            3500, 5000,
          ],
          backgroundColor: '#bada55',
        },
      ],
    },
    options: { responsive: true },
  }

  chart:any
  ngAfterViewInit() {
      this.chart = new Chart("myChart",this.config)
    }
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


    
  }

