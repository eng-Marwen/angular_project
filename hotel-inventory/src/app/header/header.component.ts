import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slogan:string="Your one stop shop for everything.";
  getSlogan():string{
    return "this is a new slogan"
  }
  source:string="/assets/sh.jpg";
}
