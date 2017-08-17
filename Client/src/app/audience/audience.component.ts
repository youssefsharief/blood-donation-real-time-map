import { Component } from '@angular/core';
import { AppSocketIoService } from '../shared/services/socket';

@Component({
    selector: 'audience',
    templateUrl: 'audience.component.html',
})
export class AudienceComponent {
    audience
    constructor(private appSocketIoService: AppSocketIoService) {
        this.appSocketIoService.audienceBS.subscribe(data=> this.audience=data)
    }
    join(name) {
        return this.appSocketIoService.join(name)
    }

    member(){
        return this.appSocketIoService.member
    }
    isConnected(){
        return this.appSocketIoService.isConnected()
    }
}
