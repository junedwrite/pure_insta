import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ComponentNameComponent } from './component-name/component-name.component';
import { RegisterComponent } from './register/register.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { AuthGuard } from 'src/auth.guard';

const routes: Routes = [
  {
    path: '', component: ComponentNameComponent,
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
    path: '**',component:ComponentNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
