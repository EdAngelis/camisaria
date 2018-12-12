import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { PagesComponent} from '../app/pages/pages.component';
import { CartComponent } from '../app/pages/cart/cart.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'pages', component: PagesComponent},
  {path:'home', component:HomeComponent},
  {path:'cart', component:CartComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
