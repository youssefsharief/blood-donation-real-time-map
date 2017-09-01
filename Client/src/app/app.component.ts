import { Component } from '@angular/core';
import { AppSocketIoService } from './shared/services/socket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title:string;
  speaker: any

     constructor(private appSocketIoService: AppSocketIoService) {
        this.appSocketIoService.intantiate()
        this.appSocketIoService.speakerBS.subscribe(data=> this.speaker=data)
        this.appSocketIoService.titleBS.subscribe(data=> this.title=data)
    }

     isConnected(){
        return this.appSocketIoService.isConnected()
    }

}
