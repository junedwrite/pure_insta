import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ComponentNameComponent } from './component-name/component-name.component';
import { RegisterComponent } from './register/register.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { AuthGuard } from 'src/auth.guard';
import { CardComponent } from './card/card.component';
import { BuyPageComponent } from './buy-page/buy-page.component';

const routes: Routes = [
  {
    path: '', component: Tab1Page,canActivate :[AuthGuard]
  },
  {
    path: 'home', component: Tab1Page,canActivate :[AuthGuard] // Define the new path and component
  },
  {
    path: 'register', component: RegisterComponent, // Define the new path and component
  },
  {
    path:'hero_details/:id',component:HeroDetailsComponent,canActivate :[AuthGuard]
  },
  {
    path: 'cardDetails',component:CardComponent,canActivate :[AuthGuard]
  },
  {
    path: 'buy/:id',component:BuyPageComponent,canActivate :[AuthGuard]
  },
  {
    path: 'login',component:ComponentNameComponent
  },
  {
    path: '**',component:ComponentNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
