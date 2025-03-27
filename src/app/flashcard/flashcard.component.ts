import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { NgIf, NgClass } from '@angular/common';
import { FlashcardService } from '../services/flashcard.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  imports: [NgIf, NgClass],
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent {
  @Input() card!: Flashcard;
  @Output() learn = new EventEmitter<number>();
  
  status = "normal";

  constructor(private flashcardService: FlashcardService) {}

  flipCard() {
    if (this.status == "normal") {
      this.status = "start";
    }
  }

  onAnimEnd() {
    if (this.status == "start") {
      this.status = "end";
      this.flashcardService.flipCard(this.card.id);
    } else if (this.status == "end") {
      this.status = "normal";
    }
  }
}