import { Component, inject, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContractService } from '../../service/contract.service';
import { AppInfo, UserDto, UserRole } from '../../interfaces/Objects';
import { ServerService } from '../../service/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  walletService = inject(ContractService);
  serverService = inject(ServerService);
  router = inject(Router);

  role = input.required<string>();

  isSigningUp: boolean = false; // Toggle between Login and Signup
  showForm: boolean = false; // Show form after wallet signup
  walletNotInstalled: boolean = false;
  userAddr!: string;
  userData: UserDto = {
    user_id: '',
    full_name: '',
    email: '',
    role: UserRole.Freelancer,
  };

  // Simulate wallet connection
  async connectWallet() {
    let userAddr = await this.walletService.connectWallet();
    this.userAddr = userAddr;
    if (userAddr != '') {
      let user: AppInfo;
      this.serverService.login(userAddr).subscribe(
        (data) => {
          let user: AppInfo = data;
          console.log(user);
          if (user) {
            this.login(user);
          }
        },
        (error) => {
          if (error.status == 404) {
            this.isSigningUp = true;
            this.openSignup();
          }
        }
      );
    }
    // show if there is no wallet installed
    else {
      this.walletNotInstalled = true;
    }
  }

  // Handle login submission
  login(user: AppInfo) {
    console.log(user.role.toString().toLowerCase());
    this.router.navigateByUrl(`/app/${user.role.toString().toLowerCase()}`);
  }

  openSignup() {
    this.showForm = true;
  }

  // Handle signup form submission
  async signup() {
    // console.log(this.role());
    console.log(this.currentFile);
    this.userData.user_id = this.userAddr;
    await this.serverService
      .signup(this.userData, this.currentFile)
      .subscribe((data) => {
        this.router.navigateByUrl(
          `/app/${this.userData.role.toString().toLowerCase()}`
        );
        console.log('here is the  userrole', this.userData);
      },
      ()=>{
        this.resetForm();

      }
    
    );

    // alert('Signup successful!');
    // console.log(this.userData);
  }

  // Reset form after signup
  resetForm() {
    this.userData = {
      user_id: '',
      full_name: '',
      email: '',
      role: UserRole.Freelancer,
    };

    this.showForm = false;
    this.isSigningUp = false;
  }

  fileName: string = 'No file chosen';
  currentFile: any;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.currentFile = file;
      this.fileName = file.name;
    }
  }
}
