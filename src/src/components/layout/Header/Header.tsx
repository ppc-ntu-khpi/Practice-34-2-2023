import { FC, useContext } from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { ColorContext } from '../../context/ColorContext';
import { hexToRGB } from '../../../utils/color/hexToRGB';
import { DEFAULT_HOVER_COLOR } from '../../../constants/quiz';

export const Header: FC = () => {
  const { color } = useContext(ColorContext);

  return (
    <Flex
      px={8}
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      backgroundColor={`rgba(${hexToRGB(
        color,
        'values-only',
      ).toString()}, 0.8)`}
      color="white">
      <Image
        boxSize="40px"
        src="/PPFK_logo.png"
        alt="Logo"
        mr={5}
      />
      <Heading size="md">ППФК</Heading>
      <Spacer />
      <Stack
        direction={'row'}
        spacing={6}
        textDecoration="none">
        <Link
          href={'#'}
          style={{ textDecoration: 'none' }}>
          <Button
            variant="ghost"
            _hover={{
              backgroundColor: `${DEFAULT_HOVER_COLOR}`,
              color: `${hexToRGB(color, 'full')}`,
            }}>
            Коледж
          </Button>
        </Link>
        <Link
          href={'#'}
          style={{ textDecoration: 'none' }}>
          <Button
            variant="ghost"
            _hover={{
              backgroundColor: `${DEFAULT_HOVER_COLOR}`,
              color: `${hexToRGB(color, 'full')}`,
            }}>
            Довідка
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};
