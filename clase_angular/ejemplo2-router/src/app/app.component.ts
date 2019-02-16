import { Component, OnInit } from '@angular/core';
import { Game } from './models/game.model';
import { GameStockService } from './services/game-stock.service';
import { Seller } from './models/seller.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Routing';
  // games: Game[];
  // show: true;
  // selectedGameName: string;
  // selectedGameSellers: Seller[];

  constructor(private gameStockService: GameStockService) { }

  // onGameChangeHandler(gameName: string) {
  //   const { name, sellers } = this.gameStockService.getGameByName(gameName);
  //   this.selectedGameName = name;
  //   this.selectedGameSellers = sellers;
  // }

  // onCreateGameEvent($event: any) {
  //   const game = this.mapper($event);
  //   this.gameStockService.addGame(game);
  //   this.loadGames();
  // }

  ngOnInit(): void {
    // this.loadGames();
  }

  // private loadGames() {
  //   // this.games = this.gameStockService.getGames();
  // }
}
