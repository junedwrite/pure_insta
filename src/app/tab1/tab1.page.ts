import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  products:any=[];
  userDetails:any={};
  categories:any=[];
  constructor(
    private route:Router,
    private api:ApiserviceService
  ) {}
  ngOnInit()
  {
  //   console.log('tab1')
  //   this.userDetails= localStorage.getItem("userDetails");
  //   if(this.userDetails)
  //   {
  //     this.userDetails=JSON.parse(this.userDetails);
  //     console.log('islogin',this.userDetails);
  //     if(this.userDetails.email)
  //     {
  //       // this.islogin=true;
  //       this.products_list()
  //     }
  //   }else{
  //     // this.islogin=false;
  //     this.route.navigateByUrl('/tabs/tab1');
  //   }
  //   this.Get_categories();
  // }
  // detailsPage(id:any)
  // {
  //   this.route.navigateByUrl(`/tabs/tab1/hero_details/${id}`);
  // }

  // products_list()
  // {
  //   this.api.herosListService().subscribe((data:any)=>{
  //     console.log('products',data);
  //     this.products=data;
  //   })
  // }
  // Get_categories()
  // {
  //   this.api.categories().subscribe((data:any)=>{
  //     console.log('categories',data);
  //     if(data && data[0])
  //     {
  //       this.categories=data
  //     }
  //   })
  }
}
