import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from './Helmet';
import theme from '../theme';
import { loadIcons } from '../utils/icon-loader';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Flex, Box } from 'rebass';

loadIcons();

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <main>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
      <Flex flexDirection={'column'}>
        <Box height={['60px', '80px']}>
          <Header />
        </Box>
        <Box p={'36px 12px'} minHeight={'90vh'}>
          {children}
        </Box>
        <Box>
          <Footer />
        </Box>
      </Flex>
    </ThemeProvider>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
