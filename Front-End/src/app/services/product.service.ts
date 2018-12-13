import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartModel } from '../models/cart-model';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly urlProduct = 'http://localhost:3000/product/addCart';

  product: ProductModel;
  productToCart: CartModel;
  public itensCarrinho: CartModel[] = [];

  constructor(private http: HttpClient) { 
    this.productToCart = new CartModel;
  }

  addProductInCart(name:String){
    try{
      this.http.get(this.urlProduct+name)     
      .subscribe(res=>{
        this.product = res as ProductModel;
        
        if (sessionStorage.getItem('product'+this.product.cod)){
          console.log("Já Existe o Item");
          this.productToCart = JSON.parse(sessionStorage.getItem('product'+this.product.cod));
          this.productToCart.qtd += 1 ;
          sessionStorage.setItem('product'+this.productToCart.cod, JSON.stringify(this.productToCart))
        }else{
          this.productToCart.cod = this.product.cod;
          this.productToCart.description = this.product.description;
          this.productToCart.img = this.product.img;
          this.productToCart.name = this.product.name;
          this.productToCart.value = this.product.value;
          this.productToCart.qtd = 1;
          sessionStorage.setItem('product'+this.productToCart.cod, JSON.stringify(this.productToCart))
        }
        
        //this.addLocalStorage(this.product.name,1, this.product._id)
        //console.log(JSON.parse(sessionStorage.getItem('product'+this.productToCart.cod)) )
      })
    }catch{
      console.log("Não pôde ser enviada para o servidor")
    }   
  }

}
