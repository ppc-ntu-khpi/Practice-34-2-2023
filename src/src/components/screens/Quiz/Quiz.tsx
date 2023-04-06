import { FC, useContext, useEffect, useState } from 'react';
import { Box, useBoolean } from '@chakra-ui/react';
import { IQuiz } from '../../../@types/questions';
import { QuestionsService } from '../../../services/QuestionsService';
import { takeRandomQuestions } from '../../../utils/questions/takeRandomQuestions';
import { Introduction } from './Introduction/Introduction';
import { Summary } from './Summary/Summary';
import { Questions } from './Questions/Questions';
import { ColorContext } from '../../context/ColorContext';
import {
  DEFAULT_QUIZ,
  QUESTIONS_LIMIT,
  SUMMARY_COLOR,
} from '../../../constants/quiz';

export const Quiz: FC = () => {
  const { setColor } = useContext(ColorContext);
  const [hasStarted, setHasStarted] = useBoolean(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [quizData, setQuizData] = useState<IQuiz>(DEFAULT_QUIZ);

  // useEffect(() => {
  //   console.log('Quiz renewed: ', quizData);
  // }, [quizData]);

  const takeCurrentImage = () => {
    if (!hasStarted) return '/introduction.png';
    if (quizData.isFinished) return '/summary.png';
    return quizData.currentQuestion?.backgroundPicture;
  };

  useEffect(() => {
    QuestionsService.getAllQuestions().then((questions) => {
      const randomizedQuestions = takeRandomQuestions(
        questions,
        QUESTIONS_LIMIT,
      );
      setQuizData((prev) => ({
        ...prev,
        questions: randomizedQuestions,
        currentQuestion: randomizedQuestions[0],
      }));
    });
  }, []);

  useEffect(() => {
    let timer = 0;
    if (hasStarted)
      timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);
    if (quizData.isFinished) {
      clearInterval(timer);
      setQuizData((prev) => ({ ...prev, timeElapsed }));
    }

    return () => clearInterval(timer);
  }, [hasStarted, quizData.isFinished]);

  useEffect(() => {
    if (hasStarted && !quizData.isFinished)
      setColor(quizData.currentQuestion?.hexPalette || '#aaaaaa');
    if (quizData.isFinished) setColor(SUMMARY_COLOR);
  }, [quizData.currentQuestion, hasStarted, quizData.isFinished]);

  return (
    <Box
      h="100vh"
      backgroundImage={takeCurrentImage()}
      backgroundSize="cover"
      backgroundPosition="center">
      <Box
        backdropFilter="blur(6px) brightness(90%)"
        h="100vh"
        py={16}>
        {quizData.isFinished ? (
          <Summary
            quiz={quizData}
            setQuizData={setQuizData}
            setHasStarted={setHasStarted}></Summary>
        ) : !hasStarted ? (
          <Introduction startQuiz={setHasStarted.toggle}></Introduction>
        ) : (
          <Questions
            quizData={quizData}
            setQuizData={setQuizData}></Questions>
        )}
      </Box>
    </Box>
  );
};
