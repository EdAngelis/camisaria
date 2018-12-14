import { Component, OnInit } from '@angular/core';
import { NewUserService } from '../../services/new-user.service';
import { CartModel } from '../../models/cart-model';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[NewUserService]
})
export class CartComponent implements OnInit {
  
  productChangeQTD: CartModel;
  public productsInCart: CartModel[]=[];
  user: UserModel; 
  constructor(private newUserService: NewUserService) {
        this.user = JSON.parse(sessionStorage.getItem('user'));
   }

  ngOnInit() {
    console.log(this.user);
    //this.checkUser()
    this.ShowProductsInCart();
  }

  AddQtd(cod: number){

          this.productChangeQTD = JSON.parse(sessionStorage.getItem('product'+this.user.email+cod));
          this.productChangeQTD.qtd += 1 ;
          this.productChangeQTD.total = this.productChangeQTD.qtd * this.productChangeQTD.value;
          sessionStorage.setItem('product'+this.user.email+cod, JSON.stringify(this.productChangeQTD))
          this.ShowProductsInCart()
  }

  decreaseQtd(cod: number){
    this.productChangeQTD = JSON.parse(sessionStorage.getItem('product'+this.user.email+cod));
    this.productChangeQTD.qtd -= 1 ;
    this.productChangeQTD.total = this.productChangeQTD.qtd * this.productChangeQTD.value;
    sessionStorage.setItem('product'+this.user.email+cod, JSON.stringify(this.productChangeQTD))
    this.ShowProductsInCart()
  }

  ShowProductsInCart(){
    this.productsInCart = [];
    for (let i=1;i<10;i++){
      if(sessionStorage.getItem('product'+this.user.email+i))
      {
       this.productsInCart.push(JSON.parse(sessionStorage.getItem('product'+this.user.email+i)))
      }
     }
  }
}
