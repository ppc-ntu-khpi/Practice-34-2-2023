import { FC, useContext, useEffect, useState } from 'react';
import { Box, Flex, useBoolean } from '@chakra-ui/react';
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

  const takeCurrentImage = () => {
    if (!hasStarted) return '/introduction.png';
    if (quizData.isFinished) return '/summary.png';
    return quizData.currentQuestion?.backgroundPicture;
  };

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${takeCurrentImage()})`;
  //   document.body.style.backgroundRepeat = 'no-repeat';
  //   document.body.style.backgroundSize = 'cover';
  //   //document.body.style.backdropFilter = 'blur(6px)';
  // }, [hasStarted, quizData.isFinished, quizData.currentQuestion]);

  useEffect(() => {
    if (hasStarted) {
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
    }
  }, [hasStarted, quizData.isFinished]);

  useEffect(() => {
    let timer = 0;
    if (hasStarted && !quizData.isFinished) {
      setTimeElapsed(0);
      // @ts-ignore
      timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);
    } else if (quizData.isFinished) {
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
      minHeight="100vh"
      backgroundImage={takeCurrentImage()}
      backgroundSize="cover"
      backgroundPosition="center">
      <Flex
        flexDirection="column"
        alignItems="cnter"
        justifyContent="center"
        backdropFilter="auto"
        backdropBlur="6px"
        backdropBrightness="90%"
        minHeight="100vh"
        w="100%"
        py={{ base: '120px', md: 0 }}>
        {quizData.isFinished ? (
          <Summary
            quiz={quizData}
            setQuizData={setQuizData}
            setHasStarted={setHasStarted}></Summary>
        ) : !hasStarted ? (
          <Introduction startQuiz={setHasStarted.toggle}></Introduction>
        ) : quizData.questions.length > 0 && quizData.currentQuestion ? (
          <Questions
            quizData={quizData}
            setQuizData={setQuizData}></Questions>
        ) : null}
      </Flex>
    </Box>
  );
};
