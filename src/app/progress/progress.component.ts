import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlashcardService } from '../services/flashcard.service';
import { Flashcard } from '../models/flashcard';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  imports: [RouterLink]
})
export class ProgressComponent {
  flashcards: Flashcard[] = [];
  learnedCount = 0;

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.flashcards = this.flashcardService.getFlashcards();
    this.learnedCount = this.flashcards.filter(c => c.learned).length;
  }
}