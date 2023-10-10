import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  userCardDetails:any=[];
  receivedData:any=[];
  totalAmount:any=0;
  constructor(private route :Router) { }

  ngOnInit() {
    this.getCardDetails();
  }
getCardDetails()
{
  this.userCardDetails= localStorage.getItem("userCardDetails");
  if(this.userCardDetails)
  {
    this.userCardDetails=JSON.parse(this.userCardDetails);
    console.log('userCardDetails',this.userCardDetails)
    this.totalAmount =this.calculateTotalPrice();
    this.totalAmount = this.totalAmount.toFixed(2);
    console.log(this.totalAmount);
  }
}
manageProduct(item:any,work:string)
{
  setTimeout(() => {
    this.update_local_storageData();
  }, 2000); 
  var foundUser = this.userCardDetails.find(function(user:any) {
    return user.id === item.id;
});
  console.log('item',item,'work',work)
  if(work=='p' && foundUser)
  {
    item.quantity = item.quantity+1;
    item.org_price=item.price*item.quantity;
    this.totalAmount =this.calculateTotalPrice();
    this.totalAmount = this.totalAmount.toFixed(2);
  }else{
    if(item.quantity==1 || item.quantity<0)
    {
      return
    }
    item.quantity = item.quantity-1;
    item.org_price=item.price*item.quantity;
    this.totalAmount = this.calculateTotalPrice();
    this.totalAmount = this.totalAmount.toFixed(2);
  }
}
calculateTotalPrice() {
  return this.userCardDetails.reduce((total:any, item:any) => total + item.org_price, 0);
}

update_local_storageData()
{
   console.log('update')
  if(this.userCardDetails)
    {
      let updatedInfo = JSON.stringify(this.userCardDetails)
      localStorage.setItem("userCardDetails",updatedInfo);
    }
}
detailsPage(id:any)
{
  this.receivedData=[]
  this.route.navigateByUrl(`/tabs/tab1/hero_details/${id}`);
}

remove_item(data:any)
{
  this.userCardDetails = this.userCardDetails.filter((item:any) => item.id !== data.id);
  this.totalAmount = this.calculateTotalPrice();
  this.totalAmount = this.totalAmount.toFixed(2);
  this.update_local_storageData();
}
setResult(ev:any) {
  console.log(`Dismissed with role: ${ev.detail.role}`);
}

handleHeaderData(data: string) {
  this.receivedData = data;
  console.log('this.receivedData',this.receivedData)
}
cleardata()
{
  this.receivedData=[]
}

}
