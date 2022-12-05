import React from 'react';
import {
  Card,
  CardFooter,
  CardBody,
  Heading,
  Stack,
  Grid,
  GridItem,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Container,
} from '@chakra-ui/react';
import productList from '../data/productList.json';

export const Home = () => {
  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {productList.products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Card>
                <CardBody>
                  <Image
                    boxSize={120}
                    objectFit="contain"
                    src={product.imageUrl}
                    alt={product.name}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.name}</Heading>
                    <Text>{product.detail}</Text>
                    <Text color="blue.600" fontSize="xl">
                      ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" size="xs" colorScheme="blue">
                      Add to Cart
                    </Button>
                    <Button variant="solid" size="xs" colorScheme="blue">
                      Remove from cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};
