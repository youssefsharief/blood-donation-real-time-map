import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from "@angular/common";
import { LayoutModule } from '../shared/layout.module';

@NgModule({
    imports: [
        LayoutModule,
        HomeRoutingModule,
        CommonModule   
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
