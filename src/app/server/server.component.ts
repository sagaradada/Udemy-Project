import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  intro:string ="Introduction";
  name:string = "Sagar Timalsina";
  college:string ="Islington College";

  getName(){
    return this.name;
  }
  getCollege(){
    return this.college;
  }

}
