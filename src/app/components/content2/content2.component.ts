import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from './../../model/iproduct';
import { ourProducts } from './../../model/products';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {
  products: IProduct[]= ourProducts;
  // render:boolean = true;
  
  constructor(public router:Router) {
  }

  ngOnInit(): void {
  }

  gotoProduct(id:number){
    this.router.navigate([`/products/${id}`])
  }

}
