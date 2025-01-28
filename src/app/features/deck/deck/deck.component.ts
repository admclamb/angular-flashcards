import { Component, OnInit } from '@angular/core';
import { Deck } from '../../decks/deck';
import { DecksService } from '../../decks/decks.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck',
  imports: [RouterModule, CommonModule],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css',
})
export class DeckComponent implements OnInit {
  deck: Deck | null = null;

  constructor(
    private readonly decksService: DecksService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const deckId = this.route.snapshot.paramMap.get('deckId');

    if (!deckId) {
      this.router.navigate(['/']);
    }

    this.decksService.readDeck(deckId ?? '').subscribe(
      (deck: Deck) => {
        this.deck = deck;
      },
      (error) => {
        console.error('Error fetching deck:', error);
      }
    );
  }
}
