import { HeaderComponent } from './header/header.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent
    ]
})
export class LayoutModule { }
