import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit {

  serverID:number=10;
  serverStatus:string="offline";

  constructor() {
    this.serverStatus =Math.random() > 0.5? 'online':'offline';
  }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
   return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
