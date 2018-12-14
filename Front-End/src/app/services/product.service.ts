import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartModel } from '../models/cart-model';
import { ProductModel } from '../models/product-model';
import { NewUserService } from '../services/new-user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly urlProduct = 'http://localhost:3000/product/addCart';

  product: ProductModel;
  productToCart: CartModel;

  constructor(
    private http: HttpClient,
    private newUserService: NewUserService
    ) 
      { 
        this.productToCart = new CartModel;
      }

  addProductInCart(name:String){
    this.newUserService.userLoged();
    const user = this.newUserService.user.email;
    try{
      this.http.get(this.urlProduct+name)     
      .subscribe(res=>{
        this.product = res as ProductModel;
        
        if (sessionStorage.getItem('product'+user+this.product.cod)){
          this.productToCart = JSON.parse(sessionStorage.getItem('product'+user+this.product.cod));
          this.productToCart.qtd += 1 ;
          this.productToCart.total = this.productToCart.qtd * this.productToCart.value;
          sessionStorage.setItem('product'+user+this.productToCart.cod, JSON.stringify(this.productToCart))
          
        }else{
          this.productToCart.cod = this.product.cod;
          this.productToCart.description = this.product.description;
          this.productToCart.img = this.product.img;
          this.productToCart.name = this.product.name;
          this.productToCart.value = this.product.value;
          this.productToCart.qtd = 1;
          this.productToCart.total = this.productToCart.qtd * this.productToCart.value;
          sessionStorage.setItem('product'+user+this.productToCart.cod, JSON.stringify(this.productToCart))
          
        }
        
        //this.addLocalStorage(this.product.name,1, this.product._id)
        //console.log(JSON.parse(sessionStorage.getItem('product'+this.productToCart.cod)) )
      })
    }catch{
      console.log("Não pôde ser enviada para o servidor")
    }   
  }

}
