import { IQuestion } from '../../@types/questions';
import { QUESTIONS_LIMIT } from '../../constants/quiz';

export const takeRandomQuestions = (
  questions: IQuestion[],
  limit = QUESTIONS_LIMIT,
) => {
  if (limit > questions.length) limit = questions.length;
  const shuffledQuestions = [...questions];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [
      shuffledQuestions[j],
      shuffledQuestions[i],
    ];
  }
  return shuffledQuestions.slice(0, limit);
};
