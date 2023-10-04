import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import{FormGroup ,FormBuilder, FormControl, Validators} from '@angular/forms'
import { ApiserviceService } from '../apiservice.service';
import { AppstorageService } from '../appstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss'],
})
export class ComponentNameComponent  implements OnInit {
  userId:any;
  password:any;
  userDetails:any={}
  message:string=''
  validateUse:FormGroup | any
  constructor(private FormBuilder:FormBuilder,
    private api :ApiserviceService,
    private storageApi :AppstorageService,
    private router :Router
    ) {
      this.api.userDetails.subscribe(data=>{
        console.log('get data in login',data);
      })
     }

  ngOnInit() {
    this.userDetails= localStorage.getItem("userDetails");
    if(this.userDetails)
    {
      console.log('userDetails',this.userDetails);
      this.userDetails=JSON.parse(this.userDetails);
      console.log('islogin',this.userDetails);
      if(this.userDetails.email)
      {
        // this.islogin=true;
        this.router.navigateByUrl('/tabs/tab1/home');
      }
    }else{
      // this.islogin=false;
    }
   
    this.validateUse=this.FormBuilder.group({
      email: new FormControl('',Validators.compose([Validators.required])),
      password: new FormControl('',Validators.compose([Validators.required]))
    })
  }
  ngOnChanges(changes:any) {
    console.log('changes',changes);
  }
  loginFun(value:any)
  {
    if(value.email.lenght==0)
    {
      console.log(value.email)
    }
    console.log('value',value)
    console.log(this.validateUse)
    this.api.loginservice(value).subscribe((data:any)=>{
      console.log('data',data);
      if(data && data.token && data.data)
      {
        let userDetails =JSON.stringify(data.data);
        localStorage.setItem("token", data.token);

        localStorage.setItem("userDetails",userDetails);
        this.api.userDetails.next(data.data);
        this.api.userLogin=true;
        this.router.navigateByUrl('/tabs/tab1/home');
      }else{
        // this.api.userLogin=false;
        this.message='User Not Found'
      }
    })
    // console.log('user',this.userId,'password',this.password)
  }
  registerfun()
  {
    this.router.navigateByUrl('/tabs/tab1/register');
  }
}
