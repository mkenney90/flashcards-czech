import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [
    { id: 1, phrase: 'Ano', guide: "ahh-no", translation: 'Yes', learned: false, flipped: false },
    { id: 2, phrase: 'Ne', guide: "nay", translation: 'No', learned: false, flipped: false },
    { id: 3, phrase: 'Dobrý den', guide: "doh-BREE den", translation: 'Good day', learned: false, flipped: false },
    { id: 4, phrase: 'Děkuju (moc)', guide: "dyeh-koo-yoo (mots)", translation: 'Thank you (very much)', learned: false, flipped: false },
    { id: 5, phrase: 'prosím', guide: "pro-seem", translation: 'You\'re welcome | Please', learned: false, flipped: false },
    { id: 6, phrase: 'Na shledanou', translation: 'Goodbye', learned: false, flipped: false },
    { id: 7, phrase: 'Ja jsem [name]', translation: 'I am [name]', learned: false, flipped: false },
    { id: 8, phrase: 'Rád vás poznávám', translation: 'Nice to meet you', learned: false, flipped: false }
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
