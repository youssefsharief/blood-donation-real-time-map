import { SharedModule } from '../shared/shared.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { EsriLoaderService, EsriLoaderModule } from 'angular-esri-loader';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EsriMapComponent } from '../esri-map/esri-map.component';
import { EsriMapRoutingModule } from './esri-map-routing.module';

@NgModule({
    imports: [
        EsriMapRoutingModule,
        SharedModule,
        EsriLoaderModule,
    ],
    providers:[
        EsriLoaderService
    ],
    declarations: [
        EsriMapComponent,        
    ],
})
export class EsriMapModule {

}
