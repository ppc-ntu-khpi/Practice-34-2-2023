import { IQuestion } from '../../@types/questions';

export const takeRandomQuestions = (questions: IQuestion[], limit = 5) => {
  if (limit > questions.length) limit = questions.length;
  const shuffledQuestions = [...questions];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [
      shuffledQuestions[j],
      shuffledQuestions[i],
    ];
  }
  return shuffledQuestions.slice(0, limit || 5);
};
