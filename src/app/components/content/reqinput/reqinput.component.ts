import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reqinput',
  templateUrl: './reqinput.component.html',
  styleUrls: ['./reqinput.component.css']
})
export class ReqinputComponent implements OnInit {
  inputvalue: string ='';
  inputdetails: string ='';
  flag:boolean = true;
  reqList: {req:string,detail:string}[] =[];

  @Output() sendRequests = new EventEmitter();

  constructor() { }

  addToList(){
    if (this.inputvalue =="black" || this.inputvalue =="latte" || this.inputvalue =="cappuccino" || this.inputvalue =="espresso") {
      this.sendRequests.emit({req:this.inputvalue, detail:this.inputdetails});
      // console.log(this.inputvalue);
      this.inputvalue ='';
      this.inputdetails ='';
      this.flag = true;
    } else {
      this.flag = false;
      // console.log(this.flag);
    }
  }

  ngOnInit(): void {
  }

}
