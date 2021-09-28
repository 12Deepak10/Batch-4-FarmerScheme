import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { BidderDetailsComponent } from './bidder-details/bidder-details.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { InsuranceApprovalComponent } from './insurance-approval/insurance-approval.component';
import { InsuranceclaimComponent } from './insuranceclaim/insuranceclaim.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======

import { HomeComponent } from './home/home.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

>>>>>>> e11e9cf5b909f6e7f66edc32feffc255f15358ed

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AdminComponent,
    HomeComponent,
    FarmerDetailsComponent,
    BidderDetailsComponent,
    MarketPlaceComponent,
    InsuranceApprovalComponent,
    InsuranceclaimComponent,
    DashboardComponent
=======

    AdminComponent,

    HomeComponent,
      FarmerloginComponent,
      BidderloginComponent,
      AdminloginComponent,
      ForgetpasswordComponent,
      
>>>>>>> e11e9cf5b909f6e7f66edc32feffc255f15358ed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

