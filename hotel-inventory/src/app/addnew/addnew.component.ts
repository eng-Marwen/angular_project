import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { firstclass } from '../Services-1/firstsr.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss'],

})
export class AddnewComponent implements OnInit {

  constructor(private inst:firstclass) { }

  ngOnInit(): void {
  }

 

  name:string='';
  stat:string='';
  addnew(){
      this.inst.add(this.name,this.stat);
      console.log(this.inst.users);
  }

}
