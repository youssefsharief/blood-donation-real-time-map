// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SharedModule } from '../shared/shared.module';
import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { DonorFormComponent } from '../donor-form/donor-form.component';

@NgModule({
    imports: [
        PostingRoutingModule,
        SharedModule,
    ],
    declarations: [
        PostingComponent,
        DonorFormComponent
    ],
    
})
export class PostingModule {

}
