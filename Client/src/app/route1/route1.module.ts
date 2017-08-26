import { SharedModule } from '../shared/shared.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { Route1Component } from './route1.component';
import { Route1RoutingModule } from './route1-routing.module';
import { EsriLoaderService, EsriLoaderModule } from 'angular-esri-loader';
import { EsriMapComponent } from './esri-map/esri-map.component';

@NgModule({
    imports: [
        Route1RoutingModule,
        SharedModule,
        EsriLoaderModule
    ],
    providers:[
        EsriLoaderService
    ],
    declarations: [
        Route1Component,
        EsriMapComponent
        
    ],
    exports: [
        Route1Component,
    ]
})
export class Route1Module {

}
