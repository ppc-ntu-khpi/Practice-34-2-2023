import { FC, useContext } from 'react';
import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { ColorContext } from '../../context/ColorContext';
import { hexToRGB } from '../../../utils/color/hexToRGB';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  BASE_LINK,
  EMAIL,
  motionDefaults,
  PHONE_NUMBER,
} from '../../../constants/quiz';
import { AnimatePresence, motion } from 'framer-motion';

const ChakraFlex = motion(Flex);

export const Footer: FC = () => {
  const { color } = useContext(ColorContext);

  return (
    <AnimatePresence>
      <ChakraFlex
        key={color}
        {...motionDefaults}
        py={4}
        px={{ base: 2, sm: 8 }}
        justifyContent="space-between"
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
            src={`${BASE_LINK}/Team_logo.png`}
            alt="Logo"
            mr={{ base: 0, md: 5 }}
          />
          <Text
            fontSize={{ base: 'xs', sm: 'sm' }}
            textAlign={{ base: 'center', sm: 'left' }}
            fontWeight="bold">
            © {new Date().getFullYear()} HOHMA TEAM
          </Text>
        </Flex>
        <Flex
          //flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'space-evenly', md: 'space-between' }}
          fontWeight="bold">
          <Link
            href={`tel:${PHONE_NUMBER}`}
            style={{ textDecoration: 'none' }}
            fontSize={{ base: 'xs', sm: 'sm' }}>
            <PhoneIcon
              w={6}
              h={6}
              mr={2}
            />
            <Text display={{ base: 'none', md: 'inline' }}>{PHONE_NUMBER}</Text>
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            style={{ textDecoration: 'none' }}
            fontSize={{ base: 'xs', sm: 'sm' }}
            ml={13}>
            <EmailIcon
              w={6}
              h={6}
              mr={2}
            />
            <Text display={{ base: 'none', md: 'inline' }}>{EMAIL}</Text>
          </Link>
        </Flex>
      </ChakraFlex>
    </AnimatePresence>
  );
};
