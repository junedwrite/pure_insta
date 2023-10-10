import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent  implements OnInit {
  itemId:any=0
  userDetails:any=[];
  receivedData:any=[];
  userCardDetails:any=[];
  product_details:any=[];
  message:string=''
  constructor(
    private route: ActivatedRoute,
    private api :ApiserviceService,
    private router :Router) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    console.log('ID',this.itemId);
    if(this.itemId)
    {
      this.hero_info();
    }
  }
  hero_info()
  {
    this.api.herodataByID(this.itemId).subscribe((info:any)=>{
      console.log('Hero details',info);
      // if(info && info[0])
      if(info && info.id)
      {
        this.product_details=info;
        this.getCardDetails()
      }
    })
  }
  AddTocard()
  {
    let targetId =this.product_details.id
    // this.userDetails= localStorage.getItem("userDetails");
    // if(this.userDetails)
    // {
      let CardDetails= localStorage.getItem("userCardDetails");
      if(CardDetails)
      {
        this.userCardDetails=CardDetails;
        console.log(this.userCardDetails);
        this.userCardDetails=JSON.parse(this.userCardDetails);
        var foundUser = this.userCardDetails.find(function(user:any) {
          return user.id === targetId;
      });
      
      if (foundUser) {
          console.log("User found:", foundUser);
      } else {
        console.log('new item added')
        this.product_details.quantity=1;
        this.product_details.org_price=this.product_details.price;
        this.userCardDetails.push(this.product_details);
        this.userCardDetails= JSON.stringify(this.userCardDetails)
        localStorage.setItem("userCardDetails",this.userCardDetails);
        this.message='exist'
          // console.log("User with ID", targetId, "not found.");
      }
      }else{
        this.product_details.quantity=1;
        this.product_details.org_price=this.product_details.price;
        console.log('userCardDetails',this.userCardDetails);
        this.userCardDetails=[];
        this.userCardDetails.push(this.product_details);
        this.userCardDetails= JSON.stringify(this.userCardDetails)
        localStorage.setItem("userCardDetails",this.userCardDetails);
        // this.userCardDetails=this.product_details;
      // }
    //   this.userDetails=JSON.parse(this.userDetails);
    //   console.log('userDetails',this.userDetails);
    //   let info={'user_id':this.userDetails.id,'product_id':this.product_details[0].id}
    //   this.api.addTocard(info).subscribe((data:any)=>{
    //     console.log(data);
    //     if(data && data.message && data.message=='added')
    //     {
    //       this.message=data.message
    //     }else{
    //       this.message=data.message
    //     }
    //   })
    }
  }

  Back()
  {
    this.router.navigateByUrl('/tabs/tab1/home');
  }
  getCardDetails()
  {
    this.userCardDetails= localStorage.getItem("userCardDetails");
    if(this.userCardDetails)
    {
       this.userCardDetails=JSON.parse(this.userCardDetails);
      var foundUser = this.userCardDetails.find((user:any) => {
        return user.id === this.product_details.id;
      });
    }
  
  if (foundUser) {
    this.message='exist'
    console.log("User found:", foundUser);
  } else {
    this.message='not_exist'
    console.log("User not found:",);
  }
  
  }
  cardDetailsFun()
  {
    this.router.navigateByUrl('tabs/tab1/cardDetails')
  }
  handleHeaderData(data: string) {
    this.receivedData = data;
    console.log('this.receivedData',this.receivedData)
  }
  cleardata()
  {
    this.receivedData=[]
  }
  detailsPage(id:any)
  {
    this.router.navigateByUrl(`/tabs/tab1/hero_details/${id}`);
  }
  buypage(id:any)
  {
    this.router.navigateByUrl(`/tabs/tab1/buy/${id}`);
  }
}
