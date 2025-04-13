import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [
    { id: 1, phrase: 'ano', guide: "ahh-no", translation: 'yes', learned: false, flipped: false },
    { id: 2, phrase: 'ne', guide: "nay", translation: 'no', learned: false, flipped: false },
    { id: 3, phrase: 'dobrý den', guide: "doh-BREE den", translation: 'good day', learned: false, flipped: false },
    { id: 4, phrase: 'děkuju (moc)', guide: "dyeh-koo-yoo (mots)", translation: 'Thank you (very much)', learned: false, flipped: false },
    { id: 5, phrase: 'prosím', guide: "pro-seem", translation: 'You\'re welcome | Please', learned: false, flipped: false },
    { id: 6, phrase: 'na shledanou', translation: 'Goodbye', learned: false, flipped: false },
    { id: 7, phrase: 'ja jsem [name]', translation: 'I am [name]', learned: false, flipped: false },
    { id: 8, phrase: 'rád vás poznávám', translation: 'Nice to meet you', learned: false, flipped: false }
  ]

  getFlashcards(): Flashcard[] {
    return [...this.flashcards];
  }

  markAsLearned(id: number) {
    const card = this.flashcards.find(f => f.id === id);
    if (card) card.learned = true;
  }

  flipCard(id: number) {
    const card = this.flashcards.find(f => f.id === id);
    if (card) {
      card.flipped = !card.flipped;
    }
  }

  resetProgress(): void {
    this.flashcards.forEach(card => card.learned = false);
  }

  constructor() {
  }
}
