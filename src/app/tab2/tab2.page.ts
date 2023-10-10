import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../tab1/apiservice.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  items: any = [];
  product_list: any = [];
  heroName: string = '';
  ngOnInit() {
    // this.generateItems();
    this.heros_list();
    this.get_products_list();
  }
  //  private generateItems() {
  //   const count = this.items.length + 1;
  //   for (let i = 0; i < 5; i++) {
  //     this.items.push(`Item ${count + i}`);
  //   }
  // }

  onIonInfinite(ev: any) {
    // this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  cats: any = []

  constructor(private api: ApiserviceService, private media: Media,private router :Router) {
    this.api.userDetails.subscribe(data => {
      console.log('get data in tab2', data);
    })
  }
  heros_list() {
    this.api.herosListService().subscribe((data: any) => {
      console.log('heros list', data);
      this.cats = data;
    })
  }
  myPlayer() {
    const file: MediaObject = this.media.create('../../assets/music/ek_din');
    file.play(); // Play the audio
  }
  // searchName(event:any)
  // {
  //   try {
  //     this.heroName=event.target.value;
  //     this.api.hero_names_list(event.target.value).subscribe((data:any)=>{
  //       console.log(data);
  //       if(data && data[0])
  //       {
  //         this.items=data;
  //         console.log(data);
  //       }else{
  //         this.items=[];
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  searchName(event: any) {
    console.log(event.target.value)
    const searchText = event.target.value

    this.items = this.product_list.filter((obj: any) =>
      obj.title.toLowerCase().startsWith(searchText.toLowerCase())
    );

    console.log('filteredObjects', this.items);

  }

  get_products_list() {
    this.product_list = localStorage.getItem('products');
    if (this.product_list) {
      this.product_list = JSON.parse(this.product_list);
      console.log('product_list', this.product_list)
    }
  }
  clearSearchFun()
  {
    this.items=[];
  }

  detailsPage(id:any)
  {
    this.router.navigateByUrl(`/tabs/tab1/hero_details/${id}`);
  }
}
