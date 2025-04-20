import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue:string='';

  changeSearchValue(event:Event){
    console.log((<HTMLInputElement>event.target).value);
    this.searchValue=(<HTMLInputElement>event.target).value;
  }
  @Output()emitter:EventEmitter<string>=new EventEmitter<string>();

  f(){
    this.emitter.emit(this.searchValue);
  }

}
