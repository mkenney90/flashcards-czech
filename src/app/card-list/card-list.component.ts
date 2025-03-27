import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlashcardService } from '../services/flashcard.service';
import { Flashcard } from '../models/flashcard';
import { FlashcardComponent } from "../flashcard/flashcard.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  imports: [FlashcardComponent, NgFor, RouterLink],
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  flashcards: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.flashcards = this.flashcardService.getFlashcards();
  }

  markAsLearned(id: number): void {
    this.flashcardService.markAsLearned(id);
    this.flashcards = this.flashcardService.getFlashcards();
  }

}