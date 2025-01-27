import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DecksService } from '../../decks/decks.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-deck',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.css',
})
export class CreateDeckComponent {
  createDeckForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private readonly decksService: DecksService,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    console.warn(this.createDeckForm.value);
    if (this.createDeckForm.valid) {
      this.decksService
        .createDeck({
          ...this.createDeckForm.value,
          name: this.createDeckForm.value.name || '',
          description: this.createDeckForm.value.description || '',
        })
        .subscribe((data) => {
          if (data) {
            this.router.navigate(['deck', data.id]);
          }
        });
    }
  }
}
