import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewUserService } from 'src/app/services/new-user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-popup',
  templateUrl: './register-popup.component.html',
  styleUrls: ['./register-popup.component.css'],
  providers:[NewUserService]
})
export class RegisterPopupComponent implements OnInit {
  
  
  aba: string = 'ENTRAR';

  constructor(private newUserService: NewUserService, public toastr: ToastrService) { }

  ngOnInit() {

  }
  registertUser(userForms: NgForm){
    this.newUserService.registerUser(userForms.value);
    this.newUserService.userLoged();
  }

  loginUser(userForms: NgForm){
    this.newUserService.loginUser(userForms.value);
    
  
  }

  changeApa(N: number){
    console.log(N)
    if(N == 2){
      this.aba = 'REGISTRO';
    }else{
      this.aba = 'ENTRAR';
    }
  }

  toastSucess(){
    this.toastr.success('Toast Work, thats Coll!');
  }

  
}
