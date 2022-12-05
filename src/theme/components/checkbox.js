import colors from '../foundations/colors';

export const Checkbox = {
  baseStyle: {
    fontWeight: '300',
    control: {
      _checked: {
        bg: `${colors.brand[100]}`,
        border: 'none',
        _hover: {
          bg: `${colors.brand[50]}`,
        },
      },
      _focus: {
        ring: 2,
        ringColor: `${colors.brand[50]}`,
      },
    },
  },
  defaultProps: {
    colorScheme: 'green',
  },
};
