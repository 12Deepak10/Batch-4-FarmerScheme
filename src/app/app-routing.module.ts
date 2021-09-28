import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderDetailsComponent } from './bidder-details/bidder-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { InsuranceApprovalComponent } from './insurance-approval/insurance-approval.component';
import { InsuranceclaimComponent } from './insuranceclaim/insuranceclaim.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { BiddingApprovalComponent } from './bidding-approval/bidding-approval.component';
import { BidderhomeComponent } from './bidderhome/bidderhome.component';
import { BidPlacingComponent } from './bid-placing/bid-placing.component';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: DashboardComponent
  // },
  {
    path:'farmerLink',
    component:FarmerDetailsComponent
  },
  {
    path:'bidderLink',
    component:BidderDetailsComponent
  },
  {
    path:'biddingApproval',
    component:BiddingApprovalComponent
  },
  {
    path:'marketPlaceLink',
    component:MarketPlaceComponent
  },
  {
    path:'insuranceApprovalLink',
    component:InsuranceApprovalComponent
  },
  {
    path:'claimApprovalLink',
    component: InsuranceclaimComponent
  },
  {
    path:'dashBoardLink',
    component: DashboardComponent
  },
  {
    path:'bidderHome',
    component:BidderhomeComponent
  },
  {
    path:'placebid',
    component:BidPlacingComponent
  },
  {
    path:'biddingHistory',
    component:BidhistoryComponent
    
  },
  {
    path:'marketplace',
    component:MarketPlaceComponent
  },
  //{path:'',component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'FarmerLogin',component:FarmerloginComponent},
  {path:'BidderLogin',component:BidderloginComponent},
  {path:'ForgetPassword',component:ForgetpasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
