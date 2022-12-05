import React from 'react';
import {
  Flex,
  Spacer,
  Box,
  Icon,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react';
import { BiCart, BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box p={4} mb={5} backgroundColor="blue.500">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Link to="/">
            <Heading size="md" color="white">
              Cart
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="5">
          <Link to="/">
            <Icon as={BiCategory} w={8} h={8} color="white" />
          </Link>
          <Link to="/cart">
            <Icon as={BiCart} boxSize={6} color="white" />
            <sup style={supStyle}>8</sup>
          </Link>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

const supStyle = {
  position: 'absolute',
  top: '12px',
  right: '9px',
  width: '18px',
  height: '18px',
  background: '#fff',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
