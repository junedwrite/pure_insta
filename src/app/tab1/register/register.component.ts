import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder, FormControl, Validators} from '@angular/forms'
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
// import { error } from 'console';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  validateUse:FormGroup | any
  constructor(private FormBuilder:FormBuilder,
    private router :Router,
    private api :ApiserviceService,
    ) { }

  ngOnInit() {
    this.validateUse=this.FormBuilder.group({
      username: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required])),
      password: new FormControl('',Validators.compose([Validators.required]))
    })
  }
  registerFun(value:any)
  {
    console.log('value',value)
    console.log(this.validateUse)
    this.api.RegisterUser(value).subscribe((data:any)=>{
      console.log('data',data);
      if(data && data[0])
      {
        this.router.navigateByUrl('/tabs/tab1'); 
      }
        
    },(error:any)=>{
      console.log(error);
    })
    // console.log('user',this.userId,'password',this.password)
  }
  LoginPage()
  {
    this.router.navigateByUrl('/tabs/tab1/home');
  }
}
