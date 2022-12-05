import colors from '../foundations/colors';
import { mode } from '@chakra-ui/theme-tools';

export const Button = {
  baseStyle: {
    fontWeight: '300',
    color: `${colors.base.white}`,
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    primary: (props) => ({
      bg: mode(`${colors.brand[50]}`, `${colors.brand[100]}`)(props),
    }),
    secondary: {
      bg: `${colors.brand[100]}`,
    },
    sm: {
      bg: 'teal.500',
      fontSize: 'md',
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'sm',
    colorScheme: 'green',
  },
};
