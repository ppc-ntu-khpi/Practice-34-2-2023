// Configuration
import { IQuiz } from '../@types/questions';

export const MODAL_TIMEOUT = 15;
export const QUESTIONS_LIMIT = 5;

export const PHONE_NUMBER = '+380993333390';
export const EMAIL = 'suportppfkquiz@gmail.com';

export const DEFAULT_QUIZ: IQuiz = {
  questions: [],
  correctAnswers: 0,
  currentQuestion: null,
  isFinished: false,
  questionsAnswered: 0,
  timeElapsed: 0,
};

// Color palette
export const INTRODUCTION_COLOR = '#093459';
export const SUMMARY_COLOR = '#50515C';
export const DEFAULT_HOVER_COLOR = '#dddddd';
export const ERROR_COLOR = '#833333';
export const ERROR_EMOJI = [
  '😡',
  '🤬',
  '😔',
  '☹️',
  '😖',
  '😔',
  '😞',
  '😧',
  '😮',
  '😥',
  '🤨',
];
export const SUCCESS_COLOR = '#338336';
export const SUCCESS_EMOJI = [
  '😏',
  '😁',
  '😌',
  '😊',
  '😉',
  '😉',
  '😃',
  '😎',
  '🤗',
];

export const motionDefaults = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.4,
  },
};
