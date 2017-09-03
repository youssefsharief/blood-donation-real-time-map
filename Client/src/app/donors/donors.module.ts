import { SharedModule } from '../shared/shared.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { DonorsComponent } from './Donors.component';
import { DonorsRoutingModule } from './Donors-routing.module';
import { EsriLoaderService, EsriLoaderModule } from 'angular-esri-loader';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EsriMapComponent } from '../esri-map/esri-map.component';

@NgModule({
    imports: [
        DonorsRoutingModule,
        SharedModule,
        EsriLoaderModule,
        ModalModule.forRoot(),
        
    ],
    providers:[
        EsriLoaderService
    ],
    declarations: [
        DonorsComponent,
        EsriMapComponent,        
    ],
})
export class DonorsModule {

}
