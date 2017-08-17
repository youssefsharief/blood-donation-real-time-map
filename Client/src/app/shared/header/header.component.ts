import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppSocketIoService } from '../services/socket';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    @Input() title: string
    @Input() speaker: any
    @Input() isConnected: boolean
    constructor(private appSocketIoService: AppSocketIoService) {

    }
    


}