import { Component } from '@angular/core';

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
  constructor(private gameStockService: GameStockService) { }

  createGame(formFieldValues: any): void {
    const game = this.mapper(formFieldValues);
    this.gameStockService.addGame(game);
  }

  private mapper(formFieldValues: any): Game {
    return new Game(
      formFieldValues.name,
      formFieldValues.daterelease,
      formFieldValues.imageurl,
    );
  }
}
