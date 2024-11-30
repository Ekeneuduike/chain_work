import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserAppComponent } from './pages/main-app/user-app/user-app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { ClientAppComponent } from './pages/main-app/client-app/client-app.component';
import { LenderAppComponent } from './pages/main-app/lender-app/lender-app.component';
import { DashboardComponent } from './pages/main-app/client-app/dashboard/dashboard.component';
import { ContractComponent } from './pages/main-app/client-app/contract/contract.component';
import { ChatComponent } from './reusable/chat/chat.component';
import { TalentComponent } from './pages/main-app/client-app/talent/talent.component';
import { ProposalComponent } from './pages/main-app/client-app/proposal/proposal.component';
import { GetloanComponent } from './pages/main-app/user-app/getloan/getloan.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FreelancerContractComponent } from './pages/main-app/user-app/freelancer-contract/freelancer-contract.component';
import { JobsComponent } from './pages/main-app/user-app/jobs/jobs.component';
import { FreelancerProposalComponent } from './pages/main-app/user-app/freelancer-proposal/freelancer-proposal.component';
import { LenderDashboardComponent } from './pages/main-app/lender-app/lender-dashboard/lender-dashboard.component';
import { ListingComponent } from './pages/main-app/lender-app/listing/listing.component';
import { ListComponent } from './pages/main-app/lender-app/list/list.component';
import { FreelanceProfileComponent } from './pages/main-app/user-app/freelance-profile/freelance-profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'app', redirectTo: '/', pathMatch: 'full' },
  { path: 'app/client', redirectTo: 'app/client/dashboard', pathMatch: 'full' },
  {path: 'app/freelancer',redirectTo:'app/freelancer/jobs',pathMatch:"full"},
  {path:'app/lender',redirectTo:'app/lender/dashboard',pathMatch:'full'},
  {
    path: 'app',
    component: MainAppComponent,
    children: [
      {
        path: 'client',
        component: ClientAppComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'contract', component: ContractComponent },
          { path: 'chat/:userAddr', component: ChatComponent },
          { path: 'talent', component: TalentComponent },
          { path: 'proposal', component: ProposalComponent },
          { path: 'finance', component: GetloanComponent },
        ],
      },
      {
        path: 'freelancer',
        component: UserAppComponent,
        children: [
          {path:'profile',component:FreelanceProfileComponent},
          { path: 'contract', component: FreelancerContractComponent },
          { path: 'chat', component: ChatComponent },
          { path: 'jobs', component: JobsComponent },
          { path: 'proposal', component: FreelancerProposalComponent },
        ],
      },
      {
        path: 'lender',
        component: LenderAppComponent,
        children: [
          { path: 'dashboard', component: LenderDashboardComponent },
          {path:'list',component:ListComponent},
          {path:'listing',component:ListingComponent},
         
        ],
      },
    ],
  },
  { path: 'login', component: SignUpComponent },
  { path: '404', component: ErrorpageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];
