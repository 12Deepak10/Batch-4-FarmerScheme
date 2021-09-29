import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { Forgetpassword1Component } from './forgetpassword1/forgetpassword1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'FarmerLogin',component:FarmerloginComponent},
  {path:'BidderLogin',component:BidderloginComponent},
  {path:'ForgetPassword',component:ForgetpasswordComponent},
  {path:'ForgetPassword1',component:Forgetpassword1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
