import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../interfaces/products';

const PRODUCTS:ProductInfo[]=
[
{
    name:'red dress',
    description:'this is a lovely red dress'
},
{
    name:'black dress',
    description:'Black lovely red dress'
},
{
    name:'yello dress',
    description:'yellow lovely  dress'
}


]

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
 products=PRODUCTS
  constructor() { }

  ngOnInit() {
  }

}
