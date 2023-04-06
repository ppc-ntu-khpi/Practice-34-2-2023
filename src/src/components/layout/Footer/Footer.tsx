import { FC, useContext } from 'react';
import { Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { ColorContext } from '../../context/ColorContext';
import { hexToRGB } from '../../../utils/color/hexToRGB';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export const Footer: FC = () => {
  const { color } = useContext(ColorContext);

  return (
    <Flex
      py={4}
      px={8}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={100}
      backgroundColor={`rgba(${hexToRGB(
        color,
        'values-only',
      ).toString()}, 0.8)`}
      color="white">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center">
        <Image
          boxSize="40px"
          src="/Team_logo.png"
          alt="Logo"
          mr={5}
        />
        <Text
          fontSize="sm"
          fontWeight="bold">
          © {new Date().getFullYear()} HOHMA TEAM
        </Text>
      </Flex>
      <Spacer></Spacer>
      <Flex
        w="sm"
        alignItems="center"
        justifyContent="space-between"
        fontWeight="bold">
        <Text fontSize="sm">
          <PhoneIcon
            w={6}
            h={6}
            mr={2}
          />
          +380993333390
        </Text>
        <Text fontSize="sm">
          <EmailIcon
            w={6}
            h={6}
            mr={2}
          />
          suportppfkquiz@gmail.com
        </Text>
      </Flex>
    </Flex>
  );
};
