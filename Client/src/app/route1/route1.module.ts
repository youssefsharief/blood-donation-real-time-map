import { SharedModule } from '../shared/shared.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { Route1Component } from './route1.component';

@NgModule({
    imports: [
        SharedModule
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
