import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styles: []
})
export class GameSummaryComponent {
  @Input() game: Game;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onGameChange: EventEmitter<string> = new EventEmitter<string>();

  selectedGame(gameName: string): void {
    this.onGameChange.emit(gameName);
  }
}
