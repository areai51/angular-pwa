import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router'



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'home',
    component: HomePageComponent
  },
    {  path: 'listing',
    component: ProductListingComponent
  },
      {  path: 'details',
    component: ProductDetailsComponent
  },
])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
