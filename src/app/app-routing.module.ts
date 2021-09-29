import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { ApplyInsuranceComponent } from './apply-insurance/apply-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'FarmerLogin',component:FarmerloginComponent},
  {path:'BidderLogin',component:BidderloginComponent},
  {path:'ForgetPassword',component:ForgetpasswordComponent},
  {path:'ApplyInsurance',component:ApplyInsuranceComponent},
  {path:'ClaimInsurance',component:ClaimInsuranceComponent},
  {path:'ViewInsurance',component:ViewInsuranceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
