import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() {
    setTimeout(() =>{
     this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  allowNewServer = false;
  serverCreationStatus = '';
  serverName ='';

  intro:string ="Introduction";
  name:string = "Sagar Timalsina";
  college:string ="Islington College";

  getName(){
    return this.name;
  }
  getCollege(){
    return this.college;
  }

  onCreateServer() {
    if (this.serverName =='') {
      return this.serverCreationStatus = 'Sorry no server is created ' +'Plese enter server name';
    }
    else {
      return this.serverCreationStatus = 'Server is created ' + this.serverName;
    }
  }

}
