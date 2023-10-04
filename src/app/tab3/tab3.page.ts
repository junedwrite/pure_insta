import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../tab1/apiservice.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  userDetails:any={}
ngOnInit(){
  this.userDetails= localStorage.getItem("userDetails");
    if(this.userDetails)
    {
      this.userDetails=JSON.parse(this.userDetails);
      console.log('islogin',this.userDetails);
      if(this.userDetails.email)
      {
        // this.islogin=true;
        // this.router.navigateByUrl('/tabs/tab1/home');
      }
    }else{
      // this.islogin=false;
    }
}
  constructor(private router :Router,private api :ApiserviceService) {
    this.api.userDetails.subscribe(data=>{
      this.userDetails=data;
      console.log('get data in tab 3',data);
    })
   }
  logout()
  {
    console.log('logout call')
   this.api.logout()
  }
}
