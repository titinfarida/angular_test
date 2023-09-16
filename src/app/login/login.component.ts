import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route: Router){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    localStorage.clear();
  }

  respData: any;

  proceedLogin(loginData: any){
    if(loginData.valid){
      // this.service.proceedLogin(loginData.value).subscribe(item=>{
      //   this.respData = item;
      //   console.log('HELLO')
      //   console.log(item)
      // });
      if(loginData.value.userName == 'admin' && loginData.value.password == '123@' ){
        //redirect to 
        localStorage.setItem('user', loginData.value.userName);
        this.route.navigate(['employees'])
      }
      else{
        alert("Login failed. User name and password do not match admin's credentials.")
      }
    }
    console.log(loginData.valid);
    console.log(loginData.value);

  }

  
  

}
