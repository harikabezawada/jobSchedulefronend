import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  showLoader: boolean=false;

  constructor(private fb:FormBuilder,private apiService:ApiService,private toast:ToastrService) { 
    this.userForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required]
    })
  }

  ngOnInit() {
  }
register(){
  this.showLoader=true
  console.log(this.userForm.value)
  let data={
    username:this.userForm.value.username,
    email:this.userForm.value.email,
    password:this.userForm.value.password
  }
  this.apiService.signUp(data).subscribe((resp:any)=>{
    console.log(resp)
    this.showLoader=false
    if(resp.status==200){
      this.toast.success('Registration Successful')

    }
    else this.toast.error(`${resp.message}`)
  },(err)=>{
this.toast.error(`${err.message}`)
  })
  console.log(data)
}
}
