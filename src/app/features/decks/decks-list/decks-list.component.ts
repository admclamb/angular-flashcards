import { Component, Inject, OnInit } from '@angular/core';
import { DecksService } from '../decks.service';
import { Deck } from '../deck';
import { DecksListCardComponent } from '../decks-list-card/decks-list-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-decks-list',
  imports: [CommonModule, DecksListCardComponent, RouterModule],
  templateUrl: './decks-list.component.html',
  styleUrl: './decks-list.component.css',
})
export class DecksListComponent implements OnInit {
  constructor(private readonly decksService: DecksService) {}

  decks: Deck[] = [];

  ngOnInit(): void {
    this.loadDecks();
  }

  loadDecks(): void {
    this.decksService.listDecks().subscribe((decks) => {
      this.decks = decks;
    });
  }

  onDeckDeleted(): void {
    this.loadDecks();
  }
}
