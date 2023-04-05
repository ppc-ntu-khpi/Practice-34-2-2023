export interface IQuiz {
  questions: IQuestion[];
  currentQuestion: IQuestion;
  questionsAnswered: number;
  correctAnswers: number;
  isFinished: boolean;
  timeElapsed: string;
}

export interface IQuestion {
  text: string;
  options: string[];
  answer: string | null;
  correctAnswer: string;
  interestingFacts: {
    success: string;
    error: string;
  };
  backgroundPicture: string;
}
