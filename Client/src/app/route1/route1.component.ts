import { Component, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { AppSocketIoService } from '../shared/services/socket';
import { AddModalComponent } from './add-modal/add-modal.component'
@Component({
    selector: 'route1',
    templateUrl: 'route1.component.html',
    styleUrls: ['route1.component.css']
})
export class Route1Component {
    // @ViewChild('mapViewNode') mapEl: ElementRef;
    @ViewChild(AddModalComponent) private addModalComponent: AddModalComponent
    messages: any[]
    message: string
    map: any;
    connection
    constructor(private appSocketIoService: AppSocketIoService) {

    }

    showModal() {
		this.addModalComponent.show()
	}
    ngOnInit() {

    }
    ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
