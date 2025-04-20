import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() {

   }
  ngOnInit(): void {
  }
  @Input()allPrices:number=0;
  @Input()medPrices:number=0;
  @Input()highPrices:number=0;

  searchValue:string="all";

  @Output()
  btnchanged:EventEmitter<string>=new EventEmitter<string>();

  buttonOn(){
    this.btnchanged.emit(this.searchValue);
    
  }

}
