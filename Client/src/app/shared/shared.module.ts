import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SnackBarService } from './services/snackbar.service';
import { MdSnackBar } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { DonorFormComponent } from '../donor-form/donor-form.component';

import {
  FooterComponent,
  LeftSideMenuComponent, LoaderComponent
} from './';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers:[ SnackBarService],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FooterComponent,
    LeftSideMenuComponent, LoaderComponent,
    NavComponent,
    MaterialModule,
    DonorFormComponent

  ],
  declarations: [
    FooterComponent, 
    LeftSideMenuComponent, LoaderComponent, NavComponent, DonorFormComponent

  ],
})
export class SharedModule { }
