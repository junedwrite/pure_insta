import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../tab1/apiservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  ngOnInit(){
    this.heros_list();
   }
  cats:any=[]

  constructor(private api :ApiserviceService) {
    this.api.userDetails.subscribe(data=>{
      console.log('get data in tab2',data);
    })
   }
   heros_list()
   {
     this.api.herosListService().subscribe((data:any)=>{
       console.log('heros list',data);
       this.cats=data;
     })
   }
  
}
