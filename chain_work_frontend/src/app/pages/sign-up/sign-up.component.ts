import { Component, inject, input, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContractService } from '../../service/contract.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
 
  walletService = inject(ContractService);

  role = input.required<string>();

  isSigningUp: boolean = false; // Toggle between Login and Signup
  showForm: boolean = false; // Show form after wallet signup
  userData: any = {
    name: '',
    email: '',
    role: '',
  };

  // Simulate wallet connection
  async connectWallet() {
   await this.walletService.connectWallet(this.role())
    console.log(this.role());
    if (this.isSigningUp) {
      this.showForm = true;
    }
    // Show form after wallet signup
  }

  // Handle login submission
  login() {
    alert('Logged in successfully!');
  }

  // Handle signup form submission
  signup() {
    alert('Signup successful!');
    console.log(this.userData);
    this.resetForm();
  }

  // Reset form after signup
  resetForm() {
    this.userData = { name: '', email: '', role: '' };
    this.showForm = false;
    this.isSigningUp = false;
  }
}
