import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  fpForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  });
  user!:User
  constructor() { }

  ngOnInit(): void {
    this.user = new User()
  }
  get emailid()
  {
    return this.fpForm.get('emailid');
  }
  get password()
  {
    return this.fpForm.get('password');
  }

  Submitdata()
  {
    console.log(this.user)
  }

}



   