import { FC, useContext, useEffect } from 'react';
import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { ColorContext } from '../../../context/ColorContext';
import { hexToRGB } from '../../../../utils/color/hexToRGB';
import {
  DEFAULT_HOVER_COLOR,
  INTRODUCTION_COLOR,
} from '../../../../constants/quiz';

type TProps = {
  startQuiz: () => void;
};

export const Introduction: FC<TProps> = ({ startQuiz }) => {
  const { color, setColor } = useContext(ColorContext);

  useEffect(() => {
    setColor(INTRODUCTION_COLOR);
  }, []);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxW={'3xl'}
      h="full"
      margin={'0 auto'}
      color="white">
      <Heading
        size="md"
        as="h2">
        Ласкаво просимо до нашої вікторини!
      </Heading>
      <Heading
        size="xl"
        as="h1"
        mt={5}>
        Вікторина - Коледж та Полтавщина
      </Heading>
      <Divider
        borderColor={'white'}
        borderWidth="2px"
        borderRadius="25px"
        w="60%"
        my={5}
      />
      <Text
        fontSize="xl"
        fontWeight="bold">
        Ви отримаєте п’ять запитань, які ми випадковим чином відібрали з десяти
        можливих. Кожен студент нашого освітнього закладу, ба навіть кожен
        полтавець без заминки відповість на ці питання. Цікаво - а чи впораєтесь
        ви? Навчання в Полтавському політехнічному фаховому коледжі є
        надзвичайно цікавим, а вікторина - це відмінний спосіб дізнатись про
        коледж ще більше, бо після кожної відповіді ми розкажемо вам якийсь
        цікавий факт, що стосується заданого питання. Ми віримо, що ви зможете
        відповісти на всі запитання правильно. Тож не гайте часу і почніть
        вікторину, щоб дізнатись багато нового й цікавого про про Полтаву та
        один з її найкращих освітніх закладів!
      </Text>

      <Button
        onClick={startQuiz}
        backgroundColor={`rgba(${hexToRGB(
          color,
          'values-only',
        ).toString()}, 0.8)`}
        w="2xs"
        mt={14}
        size="lg"
        fontSize="2xl"
        _hover={{
          backgroundColor: `${DEFAULT_HOVER_COLOR}`,
          color: `${hexToRGB(color, 'full')}`,
        }}>
        Розпочати
      </Button>
    </Flex>
  );
};
