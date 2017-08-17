import { Component } from '@angular/core';
import { AppSocketIoService } from '../shared/services/socket';

@Component({
    selector: 'speaker',
    templateUrl: 'speaker.component.html',
})
export class SpeakerComponent {
    audience
    constructor(private appSocketIoService: AppSocketIoService) {
        this.appSocketIoService.audienceBS.subscribe(data => this.audience = data)
    }

    start(name, title) {
        return this.appSocketIoService.start({ name, title })
    }

    member() {
        return this.appSocketIoService.member
    }
    isConnected() {
        return this.appSocketIoService.isConnected()
    }

}
