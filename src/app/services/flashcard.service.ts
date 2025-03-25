import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [
    { id: 1, phrase: 'Ano', translation: 'Yes', learned: false },
    { id: 2, phrase: 'Ne', translation: 'No', learned: false },
    { id: 3, phrase: 'Dobrý den', translation: 'Good day', learned: false },
    { id: 4, phrase: 'Dĕkuju (moc)', translation: 'Thank you (very much)', learned: false },
    { id: 5, phrase: 'prosím', translation: 'You\'re welcome | Please', learned: false },
    { id: 6, phrase: 'Na shledanou', translation: 'Goodbye', learned: false },
    { id: 7, phrase: 'Ja jsem [name]', translation: 'I am [name]', learned: false },
    { id: 8, phrase: 'Rád vás poznávám', translation: 'Nice to meet you', learned: false }
  ]

  getFlashcards(): Flashcard[] {
    return [...this.flashcards];
  }

  markAsLearned(id: number) {
    const card = this.flashcards.find(f => f.id === id);
    if (card) card.learned = true;
  }
  constructor() { }
}
