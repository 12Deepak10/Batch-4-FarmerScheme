import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { BidderDetailsComponent } from './bidder-details/bidder-details.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { InsuranceApprovalComponent } from './insurance-approval/insurance-approval.component';
import { InsuranceclaimComponent } from './insuranceclaim/insuranceclaim.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    FarmerDetailsComponent,
    BidderDetailsComponent,
    MarketPlaceComponent,
    InsuranceApprovalComponent,
    InsuranceclaimComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
