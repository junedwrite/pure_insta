import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  cats:any=[]
  userDetails:any={}
  constructor(
    private route:Router,
    private api:ApiserviceService
  ) {}
  ngOnInit()
  {
    console.log('tab1')
    this.userDetails= localStorage.getItem("userDetails");
    if(this.userDetails)
    {
      this.userDetails=JSON.parse(this.userDetails);
      console.log('islogin',this.userDetails);
      if(this.userDetails.email)
      {
        // this.islogin=true;
        this.heros_list()
      }
    }else{
      // this.islogin=false;
      this.route.navigateByUrl('/tabs/tab1');
    }
  }
  detailsPage(id:any)
  {
    this.route.navigateByUrl(`/tabs/tab1/hero_details/${id}`);
  }

  heros_list()
  {
    this.api.herosListService().subscribe((data:any)=>{
      console.log('heros list',data);
      this.cats=data;
    })
  }

}
