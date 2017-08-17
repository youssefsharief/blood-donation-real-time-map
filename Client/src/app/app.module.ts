import { SpeakerComponent } from './speaker/speaker.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSocketIoService } from './shared/services/socket';
import { AudienceComponent } from './audience/audience.component';
import { BoardComponent } from './board/board.component';
@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    AudienceComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
