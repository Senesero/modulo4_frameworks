import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSummaryComponent } from './games/game-summary.component';
import { GameSellersComponent } from './games/game-sellers.component';
import { FormsModule } from '@angular/forms';
import { CreateGameComponent } from './games/create-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
