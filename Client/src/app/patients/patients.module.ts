// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PatientsComponent } from './patients.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';

@NgModule({
    imports: [
        PatientsRoutingModule,
        SharedModule,
    ],
    providers:[
    ],
    declarations: [
        PatientsComponent,
    ],
    exports: [
        PatientsComponent,
    ]
})
export class PatientsModule {

}
