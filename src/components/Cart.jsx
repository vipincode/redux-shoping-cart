import React from 'react';
import {
  Flex,
  Text,
  Container,
  Center,
  Box,
  Button,
  Heading,
  Icon,
  ButtonGroup,
  Image,
} from '@chakra-ui/react';
import { BiCart } from 'react-icons/bi';

export const Cart = () => {
  return (
    <Container maxW="container.xl">
      <Box mt={16}>
        <Flex mt={6} height={85} borderTop="1px solid #ddd">
          <Center w="100px">
            <Box boxSize="62px" objectFit="contain">
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Box>
          </Center>
          <Center flex="1">
            <Box width="100%">
              <Heading size="md">Product Name</Heading>
              <Text>Product details</Text>
            </Box>
          </Center>
          <Center w="100px">
            <Box textAlign="center">
              <Heading size="md" mb={2}>
                ${29}
              </Heading>
              <Button size="xs" bg="blue.500">
                Remove
              </Button>
            </Box>
          </Center>
        </Flex>
        <Box textAlign="right" padding="20px 0" borderTop="1px solid #ddd">
          <ButtonGroup spacing={3}>
            <Button size="xs" bg="blue.500">
              Clear all
            </Button>
            <Button size="xs" bg="blue.500">
              Checkout
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Flex justifyContent="center" alignItems="center">
        <Box textAlign="center">
          <Icon as={BiCart} boxSize="100px" />
          <Heading size="xl" color="blue.500">
            Cart is empty!
          </Heading>
        </Box>
      </Flex>
    </Container>
  );
};
