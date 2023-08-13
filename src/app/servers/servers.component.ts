import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer =  false;
  serverCreationStatus = 'No server created !';
  serverName = 'Test Server';
  userName = ''; 
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ! Name is :' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  userNameIsEmpty() {
    if((this.userName).length == 0) {
      return false;
    }
    else {
      return true;
    }
  }
  deleteUser() {
    this.userName = '';
  }
}
