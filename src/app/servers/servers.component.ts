import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//element
  //  selector: '[app-servers]', //attribute
  // selector: '.app-servers', //class name
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreateStatus="No server was created!";
    serverName="";
    serverCreated= false;
    servers=["tester","tester2","tester3"];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }
 
  ngOnInit() {
  }
  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreateStatus="Server was creeted! and Server name is "+this.serverName;
  }

  // onUpdateServerName(asa:Event)
  // {
  //   this.serverName = (<HTMLInputElement>asa.target).value;
  // }
}
