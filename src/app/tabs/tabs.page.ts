import { Component,OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { ApiserviceService } from '../tab1/apiservice.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit ,OnChanges{
  islogin:boolean=false;
  userDetails:any={}
  constructor(private api :ApiserviceService) {
    this.api.userDetails.subscribe(data=>{
      console.log('main tab ',data);
      this.userDetails=data;
      this.islogin=true
    })
   }
  ngOnChanges(){
    console.log('cjhangess')
  }
  ngOnInit() {
     this.userDetails= localStorage.getItem("userDetails");
    if(this.userDetails)
    {
      this.userDetails=JSON.parse(this.userDetails);
      console.log('islogin',this.userDetails);
      if(this.userDetails.email)
      {
        this.islogin=true;
      }
    }else{
      this.islogin=false;
    }
  }
checkUserLoginFun()
{

}
}
