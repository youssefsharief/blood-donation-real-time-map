import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SnackBarService } from './services/snackbar.service';
import { MaterialModule } from '@angular/material';

import {
  FooterComponent,
  LoaderComponent
} from './';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FooterComponent,
    LoaderComponent,
    NavComponent,
    MaterialModule,

  ],
  declarations: [
    FooterComponent, 
    LoaderComponent, NavComponent

  ],
})
export class SharedModule { }
