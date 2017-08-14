import { SharedModule } from '../shared/shared.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { Route1Component } from './route1.component';
import { EsriLoaderModule } from 'angular-esri-loader';
import { Route1RoutingModule } from './route1-routing.module';

@NgModule({
    imports: [
        Route1RoutingModule,
        SharedModule,
        EsriLoaderModule


    ],
    declarations: [
        Route1Component,
    ],
    exports: [
        Route1Component,
    ]
})
export class Route1Module {

}
