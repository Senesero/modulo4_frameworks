import { Component, OnInit } from '@angular/core';
import { GameStockService } from '../services/game-stock.service';
import { Game } from '../models/game.model';
import { Seller } from '../models/seller.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: []
})
export class GameListComponent implements OnInit {
  games: Game[];
  selectedGameSellers: Seller[];
  selectedGameName: string;

  constructor(private gameStockService: GameStockService) { }

  onGameChangeHandler(gameName: string) {
    const { name, sellers } = this.gameStockService.getGameByName(gameName);
    this.selectedGameName = name;
    this.selectedGameSellers = sellers;
  }

  ngOnInit(): void {
    this.loadGames();
  }

  private loadGames() {
    this.games = this.gameStockService.getGames();
  }

}
