import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RegisterPopupComponent } from '../../../register-popup/register-popup.component';
import { NewUserService } from 'src/app/services/new-user.service';
import { ProductService } from '../../../../services/product.service'

@Component({
  selector: 'app-products-scroll',
  templateUrl: './products-scroll.component.html',
  styleUrls: ['./products-scroll.component.css'],
  providers:[ProductService]
})
export class ProductsScrollComponent implements OnInit {

   intervalo;
   intervalo2;
   
  constructor(public dialog: MatDialog,
              private newUserService: NewUserService,
              private productService: ProductService) { }

  ngOnInit() {

  }
  scrollDireita(){
       this.intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
       }

  scrollEsquerda(){
    this.intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5);
  }
  scrollDireita2(){
    this.intervalo = setInterval(function(){ document.getElementById('scroller2').scrollLeft += 1 }  , 5);
    }

  scrollEsquerda2(){
    this.intervalo = setInterval(function(){ document.getElementById('scroller2').scrollLeft -= 1 }  , 5);
  }
  
  clearScroll(){ 
    clearInterval(this.intervalo);
}

   addProductInCart(name:string){

    if( this.newUserService.user == null){
      const popupConfig = new MatDialogConfig();
      popupConfig.width = "45%";
      popupConfig.height = "60%";
      this.dialog.open(RegisterPopupComponent, popupConfig);
    }else{
      this.productService.addProductInCart(name);
    }
  }

  

}
