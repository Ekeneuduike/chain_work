import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HealthCircleComponent } from '../../../../reusable/health-circle/health-circle.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,HealthCircleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  health: number = 10;

  decreaseHealth() {
    this.health -= 10;
    if (this.health < 0) {
      this.health = 0; // Prevent health from going below 0
    }
  }


  credits: Credit[] = [
    { name: 'Personal Loan', interestRate: 5.5, availableBalance: 10000, totalBorrowedAmount: 5000, totalBalance: 15000 },
    { name: 'Car Loan', interestRate: 3.9, availableBalance: 20000, totalBorrowedAmount: 10000, totalBalance: 30000 },
    // Add more credit objects as needed
  ];

  constructor() {}

  // onEditCredit(credit: Credit) {
  //   const dialogRef = this.dialog.open(EditCreditComponent, {
  //     data: { credit: credit }
  //   });

  //   dialogRef.afterClosed().subscribe((result: Credit) => {
  //     if (result) {
  //       // Update the credit in the list (this could be more sophisticated, like a service call)
  //       const index = this.credits.findIndex(c => c.name === result.name);
  //       if (index !== -1) {
  //         this.credits[index] = result;
  //       }
  //     }
  //   });
  // }

  // onAddCredit() {
  //   const newCredit: Credit = {
  //     name: 'New Credit',
  //     interestRate: 0,
  //     availableBalance: 0,
  //     totalBorrowedAmount: 0,
  //     totalBalance: 0
  //   };
  //   this.credits.push(newCredit);
  //   this.onEditCredit(newCredit); // Edit the newly added credit
  // }


}


export interface Credit {
  name: string, interestRate: number, availableBalance: number, totalBorrowedAmount: number, totalBalance: number

}