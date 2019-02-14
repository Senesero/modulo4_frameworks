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
import { NotFoundComponent } from './home/not-found.component';
import { CHECK_DIRTY_TOKEN, checkDirtyService } from './services/check-dirty.service';
import { SellerDetailsComponent } from './seller/seller-details.component';
import { AvailablePipe } from './pipes/available.pipe';
import { SellerListComponent } from './seller/seller-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent,
    GameListComponent,
    CreateSellerComponent,
    NavbarComponent,
    NotFoundComponent,
    SellerDetailsComponent,
    AvailablePipe,
    SellerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: CHECK_DIRTY_TOKEN,
      useValue: checkDirtyService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
