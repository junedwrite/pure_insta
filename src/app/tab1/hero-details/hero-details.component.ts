import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent  implements OnInit {
  itemId:any=0
  Hero_details:any=[]
  constructor(private route: ActivatedRoute,private api :ApiserviceService) { }

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
      if(info && info[0])
      {
        this.Hero_details=info;
      }
    })
  }
}
