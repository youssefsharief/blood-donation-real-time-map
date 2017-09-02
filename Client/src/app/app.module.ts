import { InfoService } from './shared/services/info.service';
import { SpeakerComponent } from './speaker/speaker.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSocketIoService } from './shared/services/socket';
import { AudienceComponent } from './audience/audience.component';
import { GraphicsService } from './esri-map/GraphicsService';
@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    AudienceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [InfoService, GraphicsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
