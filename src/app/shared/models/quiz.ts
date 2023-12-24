interface QuizOption {
  answer: string;
  options: string[];
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
