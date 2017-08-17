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
    audienceStore: any[]

    member: { name: string, id: any } = null
    constructor(private sb: SnackBarService) {
        this.groupsBS = new BehaviorSubject(this.groupsStore)
        this.audienceBS = new BehaviorSubject(this.audienceStore)
    }
    rejoinMemberIfRefreshed() {
        this.member = sessionStorage.member? JSON.parse(sessionStorage.member) : null
        if (this.member) this.join(this.member)
    }


    intantiate() {

        this.socket = io('http://localhost:3000');
        this.rejoinMemberIfRefreshed()
        this.socket.on("joined", payload => this.member = payload)
        this.socket.on("audience updated", payload => {
            this.audienceStore = payload
            this.audienceBS.next(this.audienceStore)
        })
        // this.socket.emit('connection')
    }
    join(x) {
        this.socket.emit('join', x)
        sessionStorage.member = JSON.stringify(x)
    }
    emit(action, payload?) {
        return this.socket.emit(action, payload);
    }
    isConnected(){
        return this.socket.connected
    }

}