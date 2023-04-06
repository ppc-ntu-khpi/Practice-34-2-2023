import { IQuestion } from '../@types/questions';
export class QuestionsService {
  public static async getAllQuestions(): Promise<IQuestion[]> {
    return await fetch('/src/data/questions.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => response.json());
  }
}
