import { Component } from '@angular/core';
import { DecksListComponent } from '../decks-list/decks-list.component';

@Component({
  selector: 'app-decks',
  imports: [DecksListComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css',
})
export class DecksComponent {}
