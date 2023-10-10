import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss'],
})
export class AppheaderComponent  implements OnInit {
  @Output() headerData: EventEmitter<string> = new EventEmitter<string>();
product_list:any=[]
  constructor(private router : Router) { }

  ngOnInit() {
this.get_products_list()
  }
  cardDetailsFun()
  {
    this.router.navigateByUrl('tabs/tab1/cardDetails')
  }

  searchfun(event:any)
  {
    console.log(event.target.value)
    const searchText = event.target.value

const filteredObjects = this.product_list.filter((obj:any) =>
  obj.title.toLowerCase().startsWith(searchText.toLowerCase())
);

console.log('filteredObjects',filteredObjects);
this.sendDataToParent(filteredObjects);

  }
  get_products_list()
  {
    this.product_list = localStorage.getItem('products');
    if(this.product_list)
    {
      this.product_list=JSON.parse(this.product_list);
      console.log('product_list',this.product_list)
    }
  }

  sendDataToParent(data:any) {
    const dataToSend = data
    this.headerData.emit(dataToSend);
  }
  
}
