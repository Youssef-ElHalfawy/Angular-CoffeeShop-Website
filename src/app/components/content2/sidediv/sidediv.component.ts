import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidediv',
  templateUrl: './sidediv.component.html',
  styleUrls: ['./sidediv.component.css']
})
export class SidedivComponent implements OnInit {

  constructor(public router:Router) { }

  @Input() childProduct:any;

  ngOnInit(): void {
  }

  gotoRequests(){
    this.router.navigate(['/requests'])
  }

}
