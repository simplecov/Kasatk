import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatureComponent } from './creature/creatures.component';
import { PlayerComponent } from './player/player.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatureComponent,
    PlayerComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
