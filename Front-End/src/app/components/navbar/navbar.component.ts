import { Component, OnInit } from '@angular/core';
import { NewUserService } from '../../services/new-user.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { RegisterPopupComponent } from 'src/app/pages/register-popup/register-popup.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(
    private userService: NewUserService,
    public dialog: MatDialog
    ) { 
    
  }

  

  ngOnInit() {
      this.getUsers();    

  }

  getUsers(){
    this.userService.userLoged();
  }

  SignIn(){
    const popupConfig = new MatDialogConfig();
      popupConfig.width = "45%";
      popupConfig.height = "60%";
      this.dialog.open(RegisterPopupComponent, popupConfig);
  }
}
