import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
getClass(loan:Loan): string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined {
  return {
    'paid': loan.amountPaid === loan.loanAmount,
     'overdue': new Date(loan.dueDate) < new Date() && loan.amountPaid < loan.loanAmount
  }
}
summaryItems = [
  'Interest Rate',
  'Available Balance',
  'Total Borrowed',
  'Total Balance',
];

loans = [
  {
    title: 'Personal Loan',
    institution: 'BankName',
    interestRate: 5,
    borrowed: 10000,
    balance: 2500,
  },
  {
    title: 'Car Loan',
    institution: 'AutoBank',
    interestRate: 3.5,
    borrowed: 15000,
    balance: 7500,
  },
];

tableHeaders = [
  'Loan Name',
  'Date',
  'Interest Rate',
  'Borrowed',
  'Balance',
  'Status',
  'Actions',
];

loanHistory = [
  {
    name: 'Personal Loan',
    date: '2023-01-01',
    interestRate: 5,
    borrowed: 10000,
    balance: 2500,
    status: 'Active',
  },
  {
    name: 'Car Loan',
    date: '2023-03-01',
    interestRate: 3.5,
    borrowed: 15000,
    balance: 7500,
    status: 'Active',
  },
];
  // getLoans(): Observable<Loan[]> {
  //   return of(this.loans);
  // }

  // getLoanById(id: number): Observable<Loan | undefined> {
  //   const loan = this.loans.find((loan) => loan.id === id);
  //   return of(loan);
  // }
}


export interface Loan {
  id: number;
  borrowerName: string;
  loanAmount: number;
  loanDate: string;
  dueDate: string;
  amountPaid: number;
  interestRate: number;
}
