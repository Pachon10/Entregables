import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPublicComponent } from './layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './layout/menu-private/menu-private.component';
import { HeaderPublicComponent } from './layout/header-public/header-public.component';
import { HeaderPrivateComponent } from './layout/header-private/header-private.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProvidersComponent } from './providers/providers.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import {MatButtonModule} from '@angular/material/button';
import { LogoComponent } from './layout/logo/logo.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    HomeComponent,
    LoginComponent,
    AcercaDeComponent,
    DashboardComponent,
    UsersComponent,
    ProvidersComponent,
    CustomersComponent,
    ProfileComponent,
    LogoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
