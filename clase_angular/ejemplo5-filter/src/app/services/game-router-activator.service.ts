import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { GameStockService } from './game-stock.service';

@Injectable({
  providedIn: 'root'
})
export class GameRouterActivatorService implements CanActivate {

  constructor(
    private gameStockService: GameStockService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const gameExists = !!this.gameStockService.getGameByName(route.params['id']);
    if (!gameExists) {
      this.router.navigate(['/404'])
        .then(() => true);
    }

    return gameExists;
  }
}
