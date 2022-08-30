import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
      },
    },
  },
  breakpoints: {
    small: '250px',
    md: '320px',
    big: '375px',
    bigger: '425px',
    sm: '480px',
    lg: '768px',
    mini: '1000px',
    xl: '1440px',
    '2xl': '2560px',
  },
});
export default theme;
