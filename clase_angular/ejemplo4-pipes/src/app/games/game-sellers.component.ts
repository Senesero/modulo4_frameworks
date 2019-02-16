import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameStockService } from '../services/game-stock.service';
import { Seller } from '../models/seller.model';

@Component({
  selector: 'app-game-sellers',
  templateUrl: './game-sellers.component.html',
  styles: []
})
export class GameSellersComponent implements OnInit {
  gameName: string;
  sellers: Seller[];
  addMode = false;

  constructor(
    private route: ActivatedRoute,
    private gameStockService: GameStockService,
  ) { }

  toggleAddSeller(): void {
    this.addMode = !this.addMode;
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    const { name, sellers } = this.gameStockService.getGameByName(this.route.snapshot.params['id']);
    this.gameName = name;
    this.sellers = sellers;
  }

}
