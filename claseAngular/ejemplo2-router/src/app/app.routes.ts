import { Routes, Route } from '@angular/router';
import { GameListComponent } from './games/game-list.component';
import { CreateGameComponent } from './games/create-game.component';
import { CreateSellerComponent } from './seller/create-seller.component';
import { GameSellersComponent } from './games/game-sellers.component';

export const appRoutes: Routes = [
    { path: 'games', component: GameListComponent },
    { path: 'games/new', component: CreateGameComponent },
    { path: 'games/:id', component: GameSellersComponent },
    { path: 'sellers/new', component: CreateSellerComponent },
    { path: '', redirectTo: '/games', pathMatch: 'full' },
];
