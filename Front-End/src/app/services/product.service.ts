import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly urlProduct = 'http://localhost:3000/product/addCart';

  product: ProductModel;

  constructor(private http: HttpClient) { 
   
  }

  addProductInCart(name:String){
    console.log("Chegou no Service:")
    try{
      console.log("Enviado para servidor")
      this.http.get(this.urlProduct+name)     
      .subscribe(res=>{
        this.product = res as ProductModel;
        console.log(this.product);
      })
    }catch{
      console.log("Não pôde ser enviada para o servidor")
    }
    
    
   
   
  }
}
