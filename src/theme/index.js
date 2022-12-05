import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import * as components from './components';

const overrides = {
  styles,
  components: {
    ...components,
  },
};

export default extendTheme(overrides);
