import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSummaryComponent } from './games/game-summary.component';
import { GameSellersComponent } from './games/game-sellers.component';

import { CreateGameComponent } from './games/create-game.component';
import { GameListComponent } from './games/game-list.component';

import { appRoutes } from './app.routes';
import { CreateSellerComponent } from './seller/create-seller.component';
import { NavbarComponent } from './home/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent,
    GameListComponent,
    CreateSellerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
