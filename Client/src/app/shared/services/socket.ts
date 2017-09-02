import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { SnackBarService } from './snackbar.service';

@Injectable()
export class AppSocketIoService {
    private socket: SocketIOClient.Socket;
    groupsBS: BehaviorSubject<string[]>
    groupsStore: string[]
    audienceBS: BehaviorSubject<any[]>
    private audienceStore: any[]
    private speakerName: any
    speakerBS: BehaviorSubject<any>
    private title: string
    titleBS: BehaviorSubject<string>
    member: any
    constructor(private sb: SnackBarService) {
        this.groupsBS = new BehaviorSubject(this.groupsStore)
        this.audienceBS = new BehaviorSubject(this.audienceStore)
        this.speakerBS = new BehaviorSubject(this.speakerName)
        this.titleBS = new BehaviorSubject(this.title)
    }

    instantiate() {
        this.socket = io('http://localhost:3000');
    }
    join(name) {
        this.socket.emit('join', {name})
    }
    start(x) {
        this.socket.emit('start', x)
    }
    isConnected(){
        return this.socket.connected
    }
}