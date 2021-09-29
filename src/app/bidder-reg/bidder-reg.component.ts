import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bidder } from '../Bidder';
import { BidderService } from "../bidder.service";

@Component({
  selector: 'app-bidder-reg',
  templateUrl: './bidder-reg.component.html',
  styleUrls: ['./bidder-reg.component.css']
})

@Injectable()
export class BidderRegComponent implements OnInit {
  BidderRegistrationForm:FormGroup=new FormGroup({
      firstName:new FormControl ('', [Validators.required]),
      lastName:new FormControl ('', [Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      confirmPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      address:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      traderLicense:new FormControl('',[Validators.required]),
      aadharNo:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")])
  });
  bidder=new Bidder();
  constructor(private bidderService:BidderService,private router:Router) { }

  

  ngOnInit(): void {
  }
  get firstName()
  {
    return this.BidderRegistrationForm.get('firstName');
  }
  get lastName()
  {
    return this.BidderRegistrationForm.get('lastName');
  }
  get email()
  {
    return this.BidderRegistrationForm.get('emailid');
  }
  get password()
  {
    return this.BidderRegistrationForm.get('password');
  }
  get confirmPassword()
  {
    return this.BidderRegistrationForm.get('confirmPassword');
  }
  get address()
  {
    return this.BidderRegistrationForm.get('address');
  }
  get city()
  {
    return this.BidderRegistrationForm.get('city');
  }
  get state()
  {
    return this.BidderRegistrationForm.get('state');
  }
  get pincode()
  {
    return this.BidderRegistrationForm.get('pincode');
  }
  get amount()
  {
    return this.BidderRegistrationForm.get('amount');
  }
  get traderLicense()
  {
    return this.BidderRegistrationForm.get('traderLicense');
  }
  get aadharNo()
  {
    return this.BidderRegistrationForm.get('aadharNo');
  }
  Submitdata()
  {
    console.log("Registration Successsful","Please login to continue")
  }

  register() {
    //alert(JSON.stringify(this.customer));
    this.bidderService.register(this.bidder).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['BidderLogin'])
      }
      else {
        //missing code right now
        alert(data.status);
      }
    })
  }
}
