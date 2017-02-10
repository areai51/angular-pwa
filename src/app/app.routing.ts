import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';  
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'listing', component: ProductListingComponent },
  { path: 'details', component: ProductDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [HomePageComponent,ProductListingComponent,
    ProductDetailsComponent
],
  exports: [RouterModule],

})
export class AppRoutingModule { }

export const routingComponents = [HomePageComponent, ProductListingComponent,ProductDetailsComponent];  