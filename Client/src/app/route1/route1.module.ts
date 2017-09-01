import { SharedModule } from '../shared/shared.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { Route1Component } from './route1.component';
import { Route1RoutingModule } from './route1-routing.module';
import { EsriLoaderService, EsriLoaderModule } from 'angular-esri-loader';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        Route1RoutingModule,
        SharedModule,
        EsriLoaderModule,
        ModalModule.forRoot(),
    ],
    providers:[
        EsriLoaderService
    ],
    declarations: [
        Route1Component,
        EsriMapComponent,
        AddModalComponent
        
    ],
    exports: [
        Route1Component,
    ]
})
export class Route1Module {

}
