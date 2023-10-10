import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ComponentNameComponent } from './component-name/component-name.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { CardComponent } from './card/card.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,
    ComponentNameComponent,
    RegisterComponent,
    HeroDetailsComponent,
    ProductListComponent,
    AppheaderComponent,CardComponent,BuyPageComponent
  ]
})
export class Tab1PageModule {}
