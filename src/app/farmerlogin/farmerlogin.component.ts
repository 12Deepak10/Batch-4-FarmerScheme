import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../model/login';
@Component({
  selector: 'app-farmerlogin',
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.css']
})
export class FarmerloginComponent {

  login: Login = new Login();
  message: string;

  constructor(private loginService: LoginService, private router: Router) { }
  loginUser() {
    // alert(JSON.stringify(this.login));
    // this.loginService.login(this.login).subscribe(data => {
    //   alert(JSON.stringify(data));
    //   if(data.status == 'SUCCESS') {
    //     let farmerId = data.farmerId;
    //     let farmerName = data.name;
    //     //let obj = {id : customerId, name : customerName};
    //     sessionStorage.setItem('farmerId', String(farmerId));
        
    //     //sessionStorage.getItem('customerId');
    //     sessionStorage.setItem('farmerName', farmerName);
    //     this.router.navigate(['farmerdashboard']);
    //   }
    //   else {
    //     this.message = data.message;
    //   }
    // })
  }



 
}




 
  