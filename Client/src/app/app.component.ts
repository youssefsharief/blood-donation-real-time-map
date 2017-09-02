import { Component } from '@angular/core';
import { AppSocketIoService } from './shared/services/socket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

     constructor(private appSocketIoService: AppSocketIoService) {
        this.appSocketIoService.instantiate()
    }

    
}
