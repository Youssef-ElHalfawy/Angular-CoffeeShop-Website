import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  @Input() theRequest:{req:string,detail:string}={req:"",detail:""};
  @Input() reqIndex:number = 0;
  @Output() deleteReq = new EventEmitter;

  constructor() {}

  removeRFromList(){
    this.deleteReq.emit(this.reqIndex)
  }

  ngOnInit(): void {
  }
}
