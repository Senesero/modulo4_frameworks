import { Routes } from '@angular/router';

import { GameListComponent } from './games/game-list.component';
import { CreateGameComponent } from './games/create-game.component';
import { CreateSellerComponent } from './seller/create-seller.component';
import { GameSellersComponent } from './games/game-sellers.component';
import { NotFoundComponent } from './home/not-found.component';
import { GameRouterActivatorService } from './services/game-router-activator.service';
import { CHECK_DIRTY_TOKEN } from './services/check-dirty.service';

export const appRoutes: Routes = [
    { path: 'games', component: GameListComponent },
    {
        path: 'games/new',
        component: CreateGameComponent,
        canDeactivate: [CHECK_DIRTY_TOKEN]
    },
    {
        path: 'games/:id',
        component: GameSellersComponent,
        canActivate: [GameRouterActivatorService]
    },
    { path: 'sellers/new', component: CreateSellerComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/games', pathMatch: 'full' },
];
