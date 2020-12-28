import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import SocialLink from './SocialLink';
import { useSiteQuery } from '../queries/useSiteQuery';

const Footer = () => {
  const { socialLinks } = useSiteQuery();

  return (
    <Box p={[2, 3]} backgroundColor="#fff" id="footer">
      <FooterContainer>
        <Fade direction="left" triggerOnce></Fade>
        <Flex justifyContent="center">
          <Fade direction="right" triggerOnce cascade damping={0.5}>
            {socialLinks.map((sl) => (
              <Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
                <SocialLink {...sl} invert />
              </Box>
            ))}
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  );
};

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
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
