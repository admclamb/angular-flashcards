import { Component, Input } from '@angular/core';
import { Card } from '../../decks/card';

@Component({
  selector: 'app-deck-card-list',
  imports: [],
  templateUrl: './deck-card-list.component.html',
  styleUrl: './deck-card-list.component.css',
})
export class DeckCardListComponent {
  @Input() cards!: Card[];

  constructor() {
    console.log('CARDS: ', this.cards);
  }
}
