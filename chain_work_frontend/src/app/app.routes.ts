import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserAppComponent } from './pages/main-app/user-app/user-app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { ClientAppComponent } from './pages/main-app/client-app/client-app.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"app",component:MainAppComponent,children:[{path:"client",component:ClientAppComponent}]},
    {path:"login",component:SignUpComponent},
    {path:"",redirectTo:"home",pathMatch:"full"}
];
