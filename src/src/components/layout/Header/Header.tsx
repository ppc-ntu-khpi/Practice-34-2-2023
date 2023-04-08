import { FC, useContext } from 'react';
import { Button, Flex, Heading, Image, Link, Stack } from '@chakra-ui/react';
import { ColorContext } from '../../context/ColorContext';
import { hexToRGB } from '../../../utils/color/hexToRGB';
import { DEFAULT_HOVER_COLOR } from '../../../constants/quiz';

export const Header: FC = () => {
  const { color } = useContext(ColorContext);

  return (
    <Flex
      px={8}
      py={{ base: 2, sm: 4 }}
      alignItems={'center'}
      justifyContent={'space-between'}
      flexDirection={{ base: 'column', sm: 'row' }}
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
      <Flex alignItems="center">
        <Image
          boxSize="40px"
          src="/PPFK_logo.png"
          alt="Logo"
          mr={5}
        />
        <Heading size="md">ППФК</Heading>
      </Flex>
      <Stack
        direction={'row'}
        spacing={6}
        mt={{ base: 4, sm: 0 }}>
        <Link
          isExternal
          href={'https://sites.google.com/polytechnic.co.cc/main'}
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
          isExternal
          href="https://github.com/pOpovich69/SDTP-Practice/wiki"
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
