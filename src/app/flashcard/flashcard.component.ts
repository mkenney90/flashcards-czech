import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  imports: [NgIf, NgClass],
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent {
  @Input() card!: Flashcard;
  @Output() learn = new EventEmitter<number>();
  showTranslation = false;
  flipping = false;
  status = "normal";

  cardClick() {
    if (this.status == "normal") {
      this.flipping = true;
      this.status = "start";
    }
  }
  onAnimEnd() {
    if (this.flipping) {
      this.showTranslation = !this.showTranslation;
      this.flipping = false;
    }
    if (this.status == "start") {
      this.status = "end";
    } else if (this.status == "end") {
      this.status = "normal";
    }
  }
}