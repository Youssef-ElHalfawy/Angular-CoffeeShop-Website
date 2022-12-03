import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  reqList: {req:string,detail:string}[] =[];
  
  constructor(){}
  
  receiveReq(request:{req:string,detail:string}){
    this.reqList.push(request);
  }

  removeRFromList(index:number){
    this.reqList = this.reqList.filter((req, i)=> i !=index)
  }
}