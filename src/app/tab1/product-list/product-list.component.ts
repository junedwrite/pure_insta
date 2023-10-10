import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  implements OnInit {
  products:any=[];
  userDetails:any={};
  categories:any=[];
  receivedData:any=[];
  constructor(private api :ApiserviceService,private route:Router) { }

  ngOnInit() {
    this.products_list()
    this.Get_categories();
  }
  products_list()
  {
    this.api.herosListService().subscribe((data:any)=>{
      console.log('products',data);
      this.products=data;
      let updatedInfo = JSON.stringify(this.products)
      localStorage.setItem("products",updatedInfo);
    })
  }
  detailsPage(id:any)
  {
    this.route.navigateByUrl(`/tabs/tab1/hero_details/${id}`);
  }
  categories_filterFun(categories:any)
  {
    this.products=[];
    if(categories=='men')
    {
      categories=`men's clothing`
    }else if(categories=='women'){
      categories=`women's clothing`
    }
    console.log('categories',categories)
    this.api.categories_filter(categories).subscribe((data:any)=>{
      console.log(data);
      this.products=data
    })
  }
  Get_categories()
  {
    this.api.categories().subscribe((data:any)=>{
      console.log('categories',data);
      if(data && data[0])
      {
        this.categories=data
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
}
