import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DecksComponent } from './decks/decks.component';
import { DecksService } from './decks.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DecksComponent }]),
  ],
  providers: [DecksService],
})
export class DecksModule {}
