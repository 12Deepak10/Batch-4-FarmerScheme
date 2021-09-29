import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { Resetpassword1Component } from './resetpassword1/resetpassword1.component';
import { Forgetpassword1Component } from './forgetpassword1/forgetpassword1.component';
import { FarmersloginComponent } from './farmerslogin/farmerslogin.component';


@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,

    HomeComponent,
      FarmerloginComponent,
      BidderloginComponent,
      AdminloginComponent,
      ForgetpasswordComponent,
      ResetpasswordComponent,
      Resetpassword1Component,
      Forgetpassword1Component,
      FarmersloginComponent,
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

