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
  serverCreated=false;
  userName:string ="";

  onCreateServer() {
    //Validation
    if (this.serverName =='') {
      return this.serverCreationStatus = 'Server was unable to create' +'Please enter server name';
    }
    else {
      this.serverCreated =true;
      return this.serverCreationStatus = 'Server is created ' + this.serverName;
    }
  }

}
