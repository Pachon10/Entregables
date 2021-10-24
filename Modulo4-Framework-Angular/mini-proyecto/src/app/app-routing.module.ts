import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProvidersComponent } from './providers/providers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AcercaDeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'users', component: UsersComponent},
  { path: 'providers', component: ProvidersComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: 'home',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
