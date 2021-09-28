import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidderDetailsComponent } from './bidder-details/bidder-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { InsuranceApprovalComponent } from './insurance-approval/insurance-approval.component';
import { InsuranceclaimComponent } from './insuranceclaim/insuranceclaim.component';
import { MarketPlaceComponent } from './market-place/market-place.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
