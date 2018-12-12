import { Component, OnInit } from '@angular/core';
import { NewUserService } from '../../services/new-user.service';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(private userService: NewUserService) { 
    
  }

  

  ngOnInit() {
    this.getUsers();    
  }

  getUsers(){
    this.userService.userLoged();
  }
}
