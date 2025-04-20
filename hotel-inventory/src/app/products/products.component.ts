import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {id:1,name:'Minimalists Analog Watch',price:'109',color:'Black',Available:'Not Available',image:'/assets/products/smart watch.jpg' },
    {id:2,name:'Sumsung Ultra HD Smart TV',price:'3339',color:'Black',Available:'Available',image:'/assets/products/tv.jpg' },
    {id:3,name:'APPLE Iphone 12',price:'1855',color:'Blue',Available:'Not Available',image:'/assets/products/iphone.jpg' },
    {id:4,name:'LG Fully Automatic Washing Machine',price:'1765',color:'Black',Available:'Available',image:'/assets/products/washing machine.jpg' },
    {id:5,name:'LG Refrigerator with Door Cooling  ',price:'1200',color:'Black',Available:'Not Available',image:'/assets/products/dell tv.jpg' },
    {id:6,name:'DELL Inspiration One 27 Ryzen 7',price:'2145',color:'Gray',Available:'Available',image:'/assets/products/refrigerator.jpg' },
  ]
  cproducts =this.products;
  getAll():number{
    return this.products.length;
  }
  getHigh():number{
    return this.products.filter((item) =>Number(item.price)>1500).length;
  }
  getMed():number{
    return this.products.filter((item) =>Number(item.price)>500 &&Number(item.price)<=1500).length;
  }
  ch:string='all';
  searchValue:string='';
  
  g(data:string){
    this.ch=data;
    
    if(this.ch==='high'){
       this.products=this.cproducts;
       this.products=this.products.filter(item =>Number(item.price)>1500);
    }
    else if(this.ch==='med'){ 
      this.products=this.cproducts;
      this.products=this.products.filter(item => Number(item.price)>500 &&Number(item.price)<=1500);

    }

    else this.products=this.cproducts;
    
  }
  
  gprim(data:string){
    this.searchValue=data;
    this.searchValue=this.searchValue.toLocaleLowerCase();
    if(this.searchValue===''){
      this.products=this.cproducts;
    }
    else{
        this.products=this.cproducts;
        this.products=this.products.filter(item =>item.name.toLocaleLowerCase().includes(this.searchValue));
    }


  }

}
