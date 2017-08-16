import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class AppSocketIoService {
    private socket: SocketIOClient.Socket; 

    constructor() {
        this.socket = io('http://localhost:3000');
    }
    emit(action){
        this.socket.emit('connection');
    }
    // Emit: gist saved event
    emitEventOnGistSaved(gistSaved) {
        this.socket.emit('gistSaved', gistSaved);
    }

    // Emit: gist updated event
    emitEventOnGistUpdated(gistUpdated) {
        this.socket.emit('gistUpdated', gistUpdated);
    }

    // Consume: on gist saved 
    consumeEvenOnGistSaved() {
        var self = this;
        this.socket.on('gistSaved', function (item) {
            console.log('FJDJKfgj');
        });
    }

    // Consume on gist updated 
    consumeEvenOnGistUpdated() {
        var self = this;
        this.socket.on('gistUpdated', function () {
            console.log('dsdsd');
        })
    }



}