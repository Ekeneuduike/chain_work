import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserAppComponent } from './pages/user-app/user-app.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"app-user",component:UserAppComponent},
    {path:"",redirectTo:"home",pathMatch:"full"}
];
