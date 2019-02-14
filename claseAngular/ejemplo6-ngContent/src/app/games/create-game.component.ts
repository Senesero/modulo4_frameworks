import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameStockService } from '../services/game-stock.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styles: [`
    em {
      color: red;
    }
  `]
})
export class CreateGameComponent {
  isDirty = true;
  constructor(
    private gameStockService: GameStockService,
    private router: Router
  ) { }

  createGame(formFieldValues: any): void {
    this.isDirty = false;
    const game = this.mapper(formFieldValues);
    this.gameStockService.addGame(game);
    this.router.navigate(['/games']);
  }

  private mapper(formFieldValues: any): Game {
    return new Game(
      formFieldValues.name,
      formFieldValues.daterelease,
      formFieldValues.imageurl,
    );
  }

  cancel() {
    this.router.navigate(['/games']);
  }
}
