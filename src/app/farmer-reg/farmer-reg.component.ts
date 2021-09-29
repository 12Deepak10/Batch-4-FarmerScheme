import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer-reg',
  templateUrl: './farmer-reg.component.html',
  styleUrls: ['./farmer-reg.component.css']
})
export class FarmerRegComponent implements OnInit {

  FarmerRegistrationForm:FormGroup=new FormGroup({
    firstName:new FormControl ('', [Validators.required]),
    lastName:new FormControl ('', [Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    confirmPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    landArea:new FormControl('',[Validators.required]),
    landLocation:new FormControl('',[Validators.required]),
    aadharCard:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")])
});

constructor() { }



ngOnInit(): void {
}
get firstName()
{
  return this.FarmerRegistrationForm.get('firstName');
}
get lastName()
{
  return this.FarmerRegistrationForm.get('lastName');
}
get email()
{
  return this.FarmerRegistrationForm.get('emailid');
}
get password()
{
  return this.FarmerRegistrationForm.get('password');
}
get confirmPassword()
{
  return this.FarmerRegistrationForm.get('confirmPassword');
}
get address()
{
  return this.FarmerRegistrationForm.get('address');
}
get city()
{
  return this.FarmerRegistrationForm.get('city');
}
get state()
{
  return this.FarmerRegistrationForm.get('state');
}
get pincode()
{
  return this.FarmerRegistrationForm.get('pincode');
}
get landArea()
{
  return this.FarmerRegistrationForm.get('landArea');
}
get landLocation()
{
  return this.FarmerRegistrationForm.get('landLocation');
}
get aadharCard()
{
  return this.FarmerRegistrationForm.get('aadharCard');
}
Submitdata()
{
  console.log("Registration Successsful","Please login to continue")
}
}
