import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services-1/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
  }
  title:string="eShopping";
  login(){
    this.Auth.logIn();
  }
  logout(){
    this.Auth.logOut();
  }
}
