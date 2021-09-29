import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderDetailsComponent } from './bidder-details/bidder-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { InsuranceApprovalComponent } from './insurance-approval/insurance-approval.component';
import { InsuranceclaimComponent } from './insuranceclaim/insuranceclaim.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BidderRegComponent } from './bidder-reg/bidder-reg.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { FarmerRegComponent } from './farmer-reg/farmer-reg.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { BiddingApprovalComponent } from './bidding-approval/bidding-approval.component';
import { BidderhomeComponent } from './bidderhome/bidderhome.component';
import { BidPlacingComponent } from './bid-placing/bid-placing.component';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';

=======
import { ApplyInsuranceComponent } from './apply-insurance/apply-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';
>>>>>>> 36f6ef2f5c55a9725bae23a8ebce438b93f04e4c
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
<<<<<<< HEAD
  {path:'ForgetPassword',component:ForgetpasswordComponent}

=======
  {path:'ForgetPassword',component:ForgetpasswordComponent},
  {path:'ApplyInsurance',component:ApplyInsuranceComponent},
  {path:'ClaimInsurance',component:ClaimInsuranceComponent},
  {path:'ViewInsurance',component:ViewInsuranceComponent},
  {path:'FarmerRegistration',component:FarmerRegComponent},
  {path:'BidderRegistration',component:BidderRegComponent}
>>>>>>> 36f6ef2f5c55a9725bae23a8ebce438b93f04e4c

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
