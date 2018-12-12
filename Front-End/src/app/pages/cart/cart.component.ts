import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[ProductService]
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
    console.log(this.productService.product);
  }

}
