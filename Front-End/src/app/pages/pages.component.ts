import { Component, OnInit } from '@angular/core';
import { NewUserService } from '../services/new-user.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers:[NewUserService]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}