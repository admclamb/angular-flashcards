import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'decks/:deckId/cards/:cardId/edit',
    loadChildren: () =>
      import('./features/edit-card/edit-card.module').then(
        (m) => m.EditCardModule
      ),
  },
  {
    path: 'decks/:deckId/cards/new',
    loadChildren: () =>
      import('./features/add-card/add-card.module').then(
        (m) => m.AddCardModule
      ),
  },
  {
    path: 'decks/:deckId/edit',
    loadChildren: () =>
      import('./features/edit-decks/edit-decks.module').then(
        (m) => m.EditDecksModule
      ),
  },
  {
    path: 'decks/:deckId/study',
    loadChildren: () =>
      import('./features/study/study.module').then((m) => m.StudyModule),
  },
  {
    path: 'decks/new',
    loadChildren: () =>
      import('./features/create-deck/create-deck.module').then(
        (m) => m.CreateDeckModule
      ),
  },
  {
    path: 'decks/:deckId',
    loadChildren: () =>
      import('./features/deck/deck.module').then((m) => m.DeckModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/decks/decks.module').then((m) => m.DecksModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];
