//All Global styles
import { mode } from '@chakra-ui/theme-tools';
import colors from './foundations/colors';

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "'Open Sans', sans-serif",
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
      minHeight: '100vh',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
};

export default styles;
