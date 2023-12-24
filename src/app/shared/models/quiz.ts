interface QuizOption {
  answer: string;
  options: string[];
}
export interface QuizTitles {
  icon: string;
  title: string;
}
interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  icon: string;
  questions: QuizQuestion[];
  title: string;
}
