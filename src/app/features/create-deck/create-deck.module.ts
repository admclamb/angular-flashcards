import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateDeckComponent } from './create-deck/create-deck.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CreateDeckComponent }]),
  ],
})
export class CreateDeckModule {}
