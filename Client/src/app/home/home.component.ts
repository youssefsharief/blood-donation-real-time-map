import { Component } from '@angular/core';
import { AppSocketIoService } from '../shared/services/socket';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    groups
    constructor(private appSocketIoService: AppSocketIoService) {
    this.appSocketIoService.intantiate()
  }

    onClick(){
        this.appSocketIoService.emit('aaa')
    }
    choseGroup(group){
        this.appSocketIoService.emit('group selected', group)
    }
    ngOnInit(){
        this.appSocketIoService.groupsBS.subscribe(groups=>{
            this.groups = groups
        })
    }
}
