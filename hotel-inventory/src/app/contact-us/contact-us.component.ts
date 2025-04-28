import { Component, OnInit } from '@angular/core';
import { IdeactivateCompo } from '../Services-1/deactivateGuard.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit ,IdeactivateCompo {

  constructor() { }

  ngOnInit(): void {
  }
  name1:string='';
  email1:string='';
  text1:string='';
  canExit(){
    if(this.name1 !==''||this.email1!==''||this.text1!==''){
      return confirm("You have unchanged data.Do you really want to discard?");
    }
    else{
      return true;
    }
  }
  f(){
    console.log(this.name1);
  }

}
