import { Component, OnInit ,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss'],
})
export class BuyPageComponent  implements OnInit {
  receivedData:any=[];
  product_details:any=[];
  totalAmount:any=0
  itemId:any=[];
  delevery_charge:any=0;
  constructor(
    private router:Router,
    private active :ActivatedRoute,
    private api :ApiserviceService
    ) { }

  ngOnInit() {
    this.itemId = this.active.snapshot.paramMap.get('id');
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
        this.product_details.org_price=this.product_details.price
        this.product_details.quantity=1
        console.log(this.product_details);
        this.totalAmount=this.product_details.price
        // this.getCardDetails()
      }
    })
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
  manageProduct(item:any,work:string)
{

  console.log('item',item,'work',work)
  if(work=='p')
  {
    item.quantity = item.quantity+1;
    item.org_price=item.price*item.quantity;
    this.totalAmount =item.org_price
    this.totalAmount = this.totalAmount.toFixed(2);
  }else{
    if(item.quantity==1 || item.quantity<0)
    {
      return
    }
    item.quantity = item.quantity-1;
    item.org_price=item.price*item.quantity;
    this.totalAmount = item.org_price
    this.totalAmount = this.totalAmount.toFixed(2);
  }
}
}
