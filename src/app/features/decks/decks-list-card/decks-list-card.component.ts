import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Deck } from '../deck';
import { RouterModule } from '@angular/router';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-decks-list-card',
  imports: [RouterModule],
  templateUrl: './decks-list-card.component.html',
  styleUrl: './decks-list-card.component.css',
})
export class DecksListCardComponent {
  @Input() deck!: Deck;
  @Output() deckDeleted = new EventEmitter<void>();

  constructor(private readonly decksService: DecksService) {}

  onDeleteDeck(): void {
    if (this.deck?.id) {
      if (window.confirm('Are you sure you want to delete this deck?')) {
        this.decksService.deleteDeck(this.deck.id).subscribe(() => {
          console.log(`Deck with id ${this.deck.id} deleted`);
          this.deckDeleted.emit();
        });
      }
    }
  }
}
