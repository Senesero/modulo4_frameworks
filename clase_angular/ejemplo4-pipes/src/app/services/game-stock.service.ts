import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Seller } from '../models/seller.model';

const games: Game[] = [
  new Game(
    'Super Mario Bross',
    '13 September 1985',
    // tslint:disable-next-line:max-line-length
    'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg',
    [
      {
        id: 1,
        name: 'old shop',
        price: 95,
        amount: 2,
        isAvailable: true,
      },
      {
        id: 2,
        name: 'new shop',
        price: 115,
        amount: 1,
        isAvailable: true,
      },
      {
        id: 3,
        name: 'Regular shop',
        price: 135,
        amount: 0,
        isAvailable: false,
      }
    ]
  ),
  new Game(
    'Zelda',
    '21 February 1986',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/11/zelda-ocarina-of-time-920x584.jpg',
    [
      {
        id: 1,
        name: 'old shop',
        price: 125,
        amount: 0,
        isAvailable: false
      },
      {
        id: 2,
        name: 'new shop',
        price: 145,
        amount: 1,
        isAvailable: true,
      }
    ]
  ),
  new Game(
    'Sonic',
    '26 June 1991',
    'http://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/08/17/15029626437973.jpg',
  )
];

@Injectable({
  providedIn: 'root'
})

export class GameStockService {
  getGames(): Game[] {
    return games;
  }

  getGameByName(name: string): Game {
    return games.find((g) => g.name === name);
  }

  getGameSellersByGameName(name: string): Seller[] {
    const game = this.getGameByName(name);
    return game.sellers;
  }

  addGame(game: Game): void {
    games.push(game);
  }
}
