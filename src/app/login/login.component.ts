import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  showLoader: boolean;

  constructor(private Fb: FormBuilder,private router:Router,private apiService:ApiService,private toast:ToastrService) { 
    this.LoginForm = this.Fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
     // role:['null',Validators.required]
    })
  }

  ngOnInit() {
  }
  Login(){
    this.showLoader=true
    console.log(this.LoginForm)
    let data={
      username:this.LoginForm.value.username,
     // email:this.userForm.value.email,
      password:this.LoginForm.value.password
    }
    this.apiService.loggedIn(data).subscribe((resp:any)=>{
      console.log(resp)
      this.showLoader=false
      if(resp.status==200){
        console.log(resp,resp.token)
        localStorage.setItem('userinfo',JSON.stringify(resp.token))
        console.log(JSON.parse(localStorage.getItem('userinfo')))

        this.router.navigate(['/home/schedules'])
        this.toast.success('login Successful')
  
      }
      else this.toast.error(`${resp.message}`)
    },(err)=>{
  this.toast.error(`${err.message}`)
    })
    console.log(data)
  }
}
