import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[ProductService]
})
export class CartComponent implements OnInit {

  public productsInCart: CartModel[]=[];
  constructor(private productService: ProductService) {
   }

  ngOnInit() {
    this.productsInCart.push(JSON.parse(sessionStorage.getItem('product'+1)))
    console.log(this.productsInCart)
  }

}
