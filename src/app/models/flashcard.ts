export interface Flashcard {
    id: number;
    phrase: string;
    guide?: string;
    translation: string;
    learned: boolean;
    flipped: boolean;
}