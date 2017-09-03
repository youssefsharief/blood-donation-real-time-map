import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AudienceComponent } from './audience/audience.component';
import { GraphicsService } from './esri-map/GraphicsService';
import { SnackBarService } from './shared/services/snackbar.service';
import { DataService } from './shared/services/data.service';
import { InfoService } from './shared/services/info.service';

@NgModule({
  declarations: [
    AppComponent,
    AudienceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [InfoService, GraphicsService, DataService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
