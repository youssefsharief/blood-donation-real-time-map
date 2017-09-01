import { InfoService } from './services/info.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppSocketIoService } from './services/socket';
import { SnackBarService } from './services/snackbar.service';
import { MdSnackBar } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { DataService } from './services/data.service';

import {
  FooterComponent, HeaderComponent,
  LeftSideMenuComponent, LoaderComponent
} from './';


@NgModule({
  imports: [
    CommonModule,
    
    
  ],
  providers:[AppSocketIoService, SnackBarService, DataService, InfoService],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FooterComponent, HeaderComponent,
    LeftSideMenuComponent, LoaderComponent,
    NavComponent,
    MaterialModule,

  ],
  declarations: [
    FooterComponent, HeaderComponent,
    LeftSideMenuComponent, LoaderComponent, NavComponent

  ],
})
export class SharedModule { }
