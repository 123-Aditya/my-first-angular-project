import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [
        `
        .online{
            color: white;
        }
        `,
        `
        .white-text{
            color: white;
        }
        `]
})
export class ServerComponent {
    serverId: number  =  10;
    serverStatus: string = 'offline';
    counterArray: Date[] = [];
    toggleButton = false;


    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    toggleButtonClicked() {
        //this.counterArray.push(this.counterArray.length + 1);
        this.counterArray.push(new Date());
        if(!this.toggleButton) {
         this.toggleButton = true;
        }
        else {
            this.toggleButton = false;
        }

    }
}