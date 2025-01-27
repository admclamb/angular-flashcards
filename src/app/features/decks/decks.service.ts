import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deck } from './deck';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.apiUrl}/decks?_embed=cards`);
  }

  createDeck(deck: Deck): Observable<Deck> {
    return this.http.post<Deck>(`${this.apiUrl}/decks`, deck);
  }

  readDeck(deckId: string): Observable<Deck> {
    return this.http.get<Deck>(`${this.apiUrl}/decks/${deckId}?_embed=cards`);
  }

  updateDeck(updatedDeck: Deck): Observable<Deck> {
    return this.http.put<Deck>(
      `${this.apiUrl}/decks/${updatedDeck.id}?_embed=cards`,
      updatedDeck
    );
  }

  deleteDeck(deckId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/decks/${deckId}`);
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.apiUrl}/cards`, card);
  }

  updateCard(updatedCard: Card): Observable<Card> {
    return this.http.put<Card>(
      `${this.apiUrl}/cards/${updatedCard.id}`,
      updatedCard
    );
  }

  deleteCard(cardId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cards/${cardId}`);
  }
}
