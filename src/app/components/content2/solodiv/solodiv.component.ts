import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { IProduct } from './../../../model/iproduct';
import { ourProducts } from './../../../model/products';

@Component({
  selector: 'app-solodiv',
  templateUrl: './solodiv.component.html',
  styleUrls: ['./solodiv.component.css']
})
export class SolodivComponent implements OnInit {
  // products: IProduct[];
  theProduct: any;
  productId: number = 0;

  constructor(public activatedRoute:ActivatedRoute, public router:Router) {
    // this.products = ourProducts;
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.theProduct = ourProducts.find(prod => prod.id == this.productId);
  }

  ngOnInit(): void {
  }

  gotoRequests(){
    this.router.navigate(['/requests'])
  }

}
