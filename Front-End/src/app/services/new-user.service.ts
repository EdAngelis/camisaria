import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user-model';


@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  readonly URL_USERS = 'http://localhost:3000/user';
  readonly URL_LOGIN = 'http://localhost:3000/user/lg';
  readonly URL_REGIUSER = 'http://localhost:3000/user';
  selectUser : UserModel;
  user: UserModel;
  token;
  constructor(private http: HttpClient) { 
    this.selectUser = new UserModel();
  }

  registerUser(newUser: UserModel){
    return this.http.post(this.URL_REGIUSER, newUser)
    .subscribe(res=>{
      this.token = res;
      localStorage.setItem('token', this.token.token);
      console.log(localStorage.getItem('token'));
    });
   }

   async loginUser (login: UserModel){
    
    await this.http.post(this.URL_LOGIN, login)
    .subscribe ( async res=>{ 
      this.token = res ;
     await localStorage.setItem("token", this.token.token);
      console.log(localStorage.getItem('token')); 
    })    
  
   }

   userLoged(){
      this.http.get(this.URL_USERS)
     .subscribe(res=>{
       this.user = res as UserModel;
     });
   }
}
