import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatDialogModule, MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsScrollComponent } from './pages/home/components/products-scroll/products-scroll.component';
import { RegisterPopupComponent } from './pages/register-popup/register-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TokenInterceptor } from './services/token-intercept';
import { CartComponent } from './pages/cart/cart.component';
import { ProductService } from '../app/services/product.service';
import { NewUserService } from '../app/services/new-user.service';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    ProductsScrollComponent,
    RegisterPopupComponent,
    NavbarComponent,
    CartComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
    
  ],
  entryComponents:[RegisterPopupComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, ProductService, NewUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
