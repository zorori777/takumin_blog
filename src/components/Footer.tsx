import React from 'react';
import styled from 'styled-components';
import { Text, Box } from 'rebass/styled-components';
import theme from '../theme';

const Footer = () => {
  return (
    <Box p={[2, 3]} backgroundColor="#fff" id="footer">
      <FooterContainer>
        <Box mb={2}>
          <Text fontSize={3} color={theme.colors.background}>
            © 2021, takumin
          </Text>
        </Box>
      </FooterContainer>
    </Box>
  );
};

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

export default Footer;
