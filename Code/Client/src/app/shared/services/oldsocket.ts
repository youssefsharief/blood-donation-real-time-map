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
    rejoinMemberIfRefreshed() {
        sessionStorage.member ? this.member = JSON.parse(sessionStorage.member) : this.member = null
    }


    intantiate() {

        this.socket = io('http://localhost:3000');
        this.rejoinMemberIfRefreshed()
        this.socket.on("joined", payload => this.saveMember(payload))

        this.socket.on("audience updated", payload => {
            this.audienceStore = payload
            this.audienceBS.next(this.audienceStore)
        })
        this.socket.on("started", payload => this.saveMember(payload))

        this.socket.on("session started", payload => {
            this.speakerName = payload.speakerName
            this.title = payload.title
            this.speakerBS.next(this.speakerName)
            this.titleBS.next(this.title)
        })
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
    private saveMember(payload){
        this.member = payload
        sessionStorage.member = JSON.stringify(this.member)
    }
}